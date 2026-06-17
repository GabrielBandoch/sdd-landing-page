import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-20 md:py-28 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
          Pronto para sua próxima aventura?
        </h2>
        <button className="bg-yellow-500 text-gray-900 px-8 py-3.5 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl cursor-pointer text-lg">
          Começar Agora
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
