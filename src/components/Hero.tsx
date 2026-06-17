import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Explore o mundo <br className="hidden lg:block"/>do seu jeito.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Descubra experiências de viagem únicas e personalizadas para o seu perfil.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md cursor-pointer text-lg">
              Planejar Minha Viagem
            </button>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] w-full max-w-[600px] mx-auto md:ml-auto">
              <img 
                src={heroImg} 
                alt="Pessoa observando paisagem impressionante" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
