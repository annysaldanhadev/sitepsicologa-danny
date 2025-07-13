
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
        <span className="font-display text-2xl font-semibold text-[#ae7c4c]">
         Danny Elle Psicóloga
       </span>
      </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium"
            >
              Contato
            </button>
            <Button
              onClick={handleBookNow}
              className="bg-[#ae7c4c] hover:bg-[#935f35] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-stone-700" />
            ) : (
              <Menu className="h-6 w-6 text-stone-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium text-left"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium text-left"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-stone-700 hover:text-[#ae7c4c] transition-colors font-medium text-left"
              >
                Contato
              </button>
              <Button
                onClick={handleBookNow}
                className="bg-[#ae7c4c] hover:bg-[#935f35] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Consulta
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
