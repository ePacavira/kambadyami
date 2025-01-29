import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthState } from '../types/auth';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, userType: 'client' | 'professional') => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        updateUserState(session.user.id);
      }
      setState(s => ({ ...s, loading: false }));
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        await updateUserState(session.user.id);
      } else {
        setState(s => ({ ...s, user: null, loading: false }));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function updateUserState(userId: string) {
    try {
      const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching user data:', error);
        toast.error('Error fetching user data');
        setState(s => ({ ...s, loading: false }));
        return;
      }

      if (!user) {
        console.warn('No user data found');
        setState(s => ({ ...s, user: null, loading: false }));
        return;
      }

      setState(s => ({ ...s, user, loading: false }));
    } catch (error) {
      console.error('Error in updateUserState:', error);
      setState(s => ({ ...s, loading: false }));
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success('Login realizado com sucesso!');
    } catch (error: any) {
      console.error('Sign in error:', error);
      if (error.message === 'Invalid login credentials') {
        toast.error('Email ou senha incorretos');
      } else {
        toast.error('Erro ao fazer login');
      }
      throw error;
    }
  }

  async function signUp(email: string, password: string, name: string, userType: 'client' | 'professional') {
    try {
      // First check if user exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (existingUser) {
        toast.error('Este email já está cadastrado. Por favor, faça login.');
        return;
      }

      const { data: { user }, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        if (error.message === 'User already registered') {
          toast.error('Este email já está cadastrado. Por favor, faça login.');
          return;
        }
        throw error;
      }

      if (user) {
        const { error: profileError } = await supabase
          .from('users')
          .insert([{ id: user.id, email, name, user_type: userType }]);

        if (profileError) {
          // If profile creation fails, we should clean up the auth user
          await supabase.auth.admin.deleteUser(user.id);
          throw profileError;
        }
      }

      toast.success('Cadastro realizado com sucesso!');
    } catch (error: any) {
      console.error('Sign up error:', error);
      if (error.message === 'User already registered') {
        toast.error('Este email já está cadastrado. Por favor, faça login.');
      } else {
        toast.error('Erro ao criar conta. Por favor, tente novamente.');
      }
      throw error;
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Logout realizado com sucesso!');
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error('Erro ao fazer logout');
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}