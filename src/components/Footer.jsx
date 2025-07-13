import React from 'react';
import { Heart, Instagram, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#ae7c4c]" />
              <span className="font-display text-2xl font-semibold">
                Danny Elle
              </span>
            </div>
            <p className="text-stone-300 leading-relaxed">
              Psicóloga clínica especializada em crianças e adultos, oferecendo 
              cuidado emocional com abordagem lúdica e centrada no cliente.
            </p>
            <p className="text-[#ae7c4c] font-medium italic">
              "Cuidado emocional para cada etapa"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="font-semibold text-lg">Links Rápidos</span>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="block text-stone-300 hover:text-[#ae7c4c] transition-colors"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => document.getElementById('blog').scrollIntoView({ behavior: 'smooth' })}
                className="block text-stone-300 hover:text-[#ae7c4c] transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })}
                className="block text-stone-300 hover:text-[#ae7c4c] transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="block text-stone-300 hover:text-[#ae7c4c] transition-colors"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="font-semibold text-lg">Contato</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#ae7c4c]" />
                <span className="text-stone-300">(65) 99310-9978</span>
              </div>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.instagram.com/psicologadannyelle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/5565993109978?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-8 text-center">
          <p className="text-stone-400">
            © 2024 Danny Elle - Psicóloga Clínica. Todos os direitos reservados.
          </p>
          <p className="text-stone-500 text-sm mt-2">
             Desenvolvido com ❤️ por Anny Saldanha | @annysaldanhadev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
