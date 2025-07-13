import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juliana Martins",
      role: "Mãe do Pedro, 7 anos",
      content: "A escuta acolhedora da Danny foi essencial para nossa família. Meu filho agora se sente compreendido e mais seguro emocionalmente.",
      rating: 5,
      image: "/images/juliana-martins.jpg"
    },
    {
      name: "Renata Lima",
      role: "Paciente adulta",
      content: "O apoio terapêutico me ajudou a recuperar minha autoestima. A abordagem da Danny é leve, afetuosa e profundamente transformadora.",
      rating: 5,
      image: "/images/renata-lima.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-lavender-50 to-sage-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#ae7c4c] mb-6">
            Depoimentos
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação e crescimento. Cada depoimento representa uma jornada 
            única de cura e desenvolvimento emocional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect border-0 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-[#ae7c4c]" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-stone-200">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img  
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        src={testimonial.image}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#ae7c4c]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-[#ae7c4c] mb-4">
              Sua História Também Pode Estar Aqui
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Cada jornada é única e especial. Se você está pronto para dar o primeiro passo 
              em direção ao bem-estar emocional, estou aqui para acompanhá-lo nessa caminhada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
