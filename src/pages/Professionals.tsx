import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Star, Search, Briefcase } from 'lucide-react';

const categories = [
  'Todos',
  'Desenvolvimento',
  'Design',
  'Marketing',
  'Consultoria',
  'Educação',
];

const professionals = [
  {
    id: 1,
    name: 'Ana Silva',
    category: 'Desenvolvimento',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    specialties: ['React', 'Node.js', 'TypeScript'],
    description: 'Desenvolvedora Full Stack com 5 anos de experiência',
  },
  {
    id: 2,
    name: 'Carlos Santos',
    category: 'Design',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    specialties: ['UI/UX', 'Figma', 'Adobe XD'],
    description: 'Designer de interfaces com foco em experiência do usuário',
  },
  {
    id: 3,
    name: 'Mariana Costa',
    category: 'Marketing',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    specialties: ['Marketing Digital', 'SEO', 'Redes Sociais'],
    description: 'Especialista em marketing digital e growth hacking',
  },
];

export function Professionals() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfessionals = professionals.filter(professional => {
    const matchesCategory = selectedCategory === 'Todos' || professional.category === selectedCategory;
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Encontre Profissionais</h1>
            <p className="text-xl">Conecte-se com os melhores profissionais para seu projeto</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar profissionais..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Professionals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((professional) => (
              <div key={professional.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{professional.name}</h3>
                      <p className="text-gray-600">{professional.category}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">{professional.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{professional.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {professional.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Contratar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}