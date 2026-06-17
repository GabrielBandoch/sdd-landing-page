import React from 'react';
import DestinationCard from './DestinationCard';
import baliImg from '../assets/bali.png';
import amalfiImg from '../assets/amalfi.png';
import kyotoImg from '../assets/kyoto.png';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      image: baliImg,
      title: "Bali, Indonésia",
      price: "A partir de R$ 4.500"
    },
    {
      id: 2,
      image: amalfiImg,
      title: "Amalfi Coast, Itália",
      price: "A partir de R$ 5.200"
    },
    {
      id: 3,
      image: kyotoImg,
      title: "Kyoto, Japão",
      price: "A partir de R$ 6.800"
    }
  ];

  return (
    <section id="destinos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Destinos em Destaque</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard 
              key={dest.id}
              image={dest.image}
              title={dest.title}
              price={dest.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
