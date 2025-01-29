import React from 'react';
import { Navbar } from '../components/Navbar';
import { ArrowRight, Star, Users, Target } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conectando Talentos e Oportunidades
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Encontre os melhores profissionais para seus projetos ou ofereça seus serviços para quem precisa.
            </p>
            <a
              href="/profissionais"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Encontrar Profissionais
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Kamba Dyami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O Kamba Dyami é uma plataforma que conecta profissionais talentosos a pessoas e empresas que buscam serviços de qualidade. Nossa missão é facilitar o acesso a oportunidades de trabalho e promover o desenvolvimento profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600">
                Conectar talentos e oportunidades, promovendo o desenvolvimento profissional e econômico.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Star className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser a principal plataforma de conexão entre profissionais e oportunidades na região.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600">
                Transparência, qualidade, compromisso e desenvolvimento contínuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Kamba Dyami</h4>
              <p className="text-gray-400">
                Conectando profissionais e oportunidades.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <p className="text-gray-400">
                Email: contato@kambadyami.com<br />
                Tel: (11) 99999-9999
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Kamba Dyami. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}