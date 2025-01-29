export interface User {
  id: string;
  email: string;
  name: string;
  user_type: 'client' | 'professional';
  created_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}