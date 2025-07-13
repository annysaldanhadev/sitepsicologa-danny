import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, MessageCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(65) 99310-9978",
      description: "Olá meu nome é danny"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Cuiabá - Mato Grosso",
      description: "Atendimento presencial e online"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-cream-50 to-rose-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Estou aqui para ouvir você. Entre em contato para agendar uma consulta ou esclarecer 
            suas dúvidas. Juntos, podemos iniciar sua jornada de bem-estar emocional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect border-0 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ae7c4c] to-[#935f35] rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-stone-800 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-olive-600 font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-stone-500 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Redes sociais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-stone-800">
                    Conecte-se Comigo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.instagram.com/psicologadannyelle/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full font-medium text-center hover:scale-105 transition-transform"
                    >
                      <Instagram className="h-5 w-5 inline-block mr-1" />
                      Instagram
                    </a>
                    <a
                      href="https://wa.me/5565993109978?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] bg-green-500 text-white py-2 px-4 rounded-full font-medium text-center hover:scale-105 transition-transform"
                    >
                      <MessageCircle className="h-5 w-5 inline-block mr-1" />
                      WhatsApp
                    </a>
                  </div>

                  <Button
                    className="w-full bg-olive-600 hover:bg-olive-700 text-white rounded-full py-3"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Agendar Consulta Online
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
