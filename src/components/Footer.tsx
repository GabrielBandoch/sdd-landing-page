import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">TravelX</h3>
            </div>
            <p className="text-gray-400 text-xs mt-12 md:mt-0">
              © 2024 TravelX. O Explorador<br/>Sofisticado.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-6">Links</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-6">Legal</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-6">Suporte</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
