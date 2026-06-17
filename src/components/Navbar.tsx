import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">TravelX</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#destinos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Destinos</a>
            <a href="#como-funciona" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
            <a href="#planos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Planos</a>
          </div>
          <div className="hidden md:flex">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md cursor-pointer">
              Cadastrar
            </button>
          </div>
          {/* Mobile menu button could go here, omitting for simplicity as per requirements */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
