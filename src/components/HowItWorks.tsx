import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: 1, text: "Escolha seu perfil" },
    { number: 2, text: "Receba sugestões" },
    { number: 3, text: "Monte seu roteiro" },
    { number: 4, text: "Aproveite a viagem" }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Como Funciona</h2>
        </div>
        
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-xl mb-4 shadow-sm transition-transform hover:scale-110 cursor-pointer">
                  {step.number}
                </div>
                <p className="text-sm font-medium text-gray-800 text-center">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
