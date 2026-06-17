import React from 'react';
import { Search, Clock, Lightbulb, ListChecks } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "Destinos personalizados"
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      title: "Economia de tempo"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-teal-600" />,
      title: "Recomendações inteligentes"
    },
    {
      icon: <ListChecks className="w-6 h-6 text-blue-600" />,
      title: "Planejamento simplificado"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow duration-300 group-hover:-translate-y-1 transform">
                {feature.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 max-w-[150px]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
