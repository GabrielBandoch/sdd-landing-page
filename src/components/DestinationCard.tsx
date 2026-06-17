import React from 'react';

interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, price }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden cursor-pointer h-80 sm:h-96 md:h-[400px] shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm font-medium">{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
