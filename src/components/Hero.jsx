
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender-200/30 rounded-full organic-shape floating"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-olive-200/30 rounded-full organic-shape floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sage-200/30 rounded-full organic-shape floating" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-2 text-[#ae7c4c]"
            >
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Psicóloga Clínica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-display text-5xl lg:text-6xl font-bold text-[#ae7c4c] leading-tight"
            >
              Danny Elle
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl lg:text-3xl font-display text-[#ae7c4c] italic"
            >
              "Cuidado emocional para cada etapa"
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-stone-600 leading-relaxed max-w-lg"
            >
              Oferecendo suporte psicológico com uma abordagem lúdica, comportamental e centrada no cliente. 
              Especializada em psicologia infantil e orientação parental, criando um espaço seguro para crescimento.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row items-center gap-4"
          >
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-[#ae7c4c] hover:bg-[#935f35] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="border-[#935f35] text-[#ae7c4c] hover:bg-olive-50 px-8 py-4 rounded-full text-lg"
            >
              Saiba Mais
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center space-x-6 pt-4"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-olive-200/50 to-lavender-200/50 rounded-3xl organic-shape transform rotate-6"></div>
            <img  
              alt="Danny Elle - Psicóloga especializada em crianças e adultos"
              className="relative z-10 w-full object-contain rounded-3xl shadow-2xl"
             src="/images/danny-hero.jpg" 
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
