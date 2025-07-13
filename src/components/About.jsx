
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Brain, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Escuta Ativa",
      description: "Cada palavra importa. Ofereço um espaço onde você se sente verdadeiramente ouvido e compreendido."
    },
    {
      icon: Shield,
      title: "Suporte Sem Julgamentos",
      description: "Um ambiente seguro e acolhedor onde você pode ser autêntico, sem medo de críticas ou julgamentos."
    },
    {
      icon: Users,
      title: "Psicologia Infantil",
      description: "Especialização em crianças, utilizando abordagens lúdicas que tornam o processo terapêutico natural e eficaz."
    },
    {
      icon: Brain,
      title: "Orientação Parental",
      description: "Apoio especializado para pais, fortalecendo vínculos familiares e desenvolvendo estratégias educativas saudáveis."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-sage-50 to-[#ae7c4c]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#935f35] mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Sou Danny Elle, psicóloga clínica com paixão por ajudar pessoas de todas as idades a encontrarem 
            seu equilíbrio emocional. Minha abordagem combina técnicas comportamentais com um olhar centrado 
            no cliente, sempre priorizando o bem-estar e o crescimento pessoal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl font-semibold text-[#935f35] mb-6">
              Minha Jornada
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed">
              Com experiência em psicologia clínica, desenvolvi uma abordagem única que integra 
              técnicas lúdicas para crianças e métodos comportamentais para adultos. Acredito que cada 
              pessoa tem seu próprio ritmo de crescimento.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Minha especialização em psicologia infantil me permite criar conexões genuínas com os 
              pequenos, enquanto meu trabalho com orientação parental fortalece toda a estrutura familiar. 
              Cada sessão é um passo em direção ao bem-estar emocional.
            </p>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-[#ae7c4c] font-medium italic text-lg">
                "Acredito que a terapia é um encontro entre duas pessoas, onde a confiança e o respeito 
                mútuo criam o ambiente perfeito para a transformação."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-200/30 to-olive-200/30 rounded-3xl organic-shape transform -rotate-3"></div>
            <img  
              alt="Danny Elle em seu consultório acolhedor"
              className="relative z-10 w-full object-cover rounded-3xl shadow-xl"
             src="/images/danny-kids.jpg" 
             />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-3xl font-semibold text-[#935f35] text-center mb-12">
            Meus Diferenciais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-effect border-0 h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d7bba7] to-[#ae7c4c] rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-xl text-stone-800">
                      {item.title}
                    </h4>
                    <p className="text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
