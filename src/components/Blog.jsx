import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Heart, Users, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Me contaram que...",
      excerpt: "As crianças estão passando mais tempo nas telas do que conversando com os papais!!",
      date: "13 de Julho, 2025",
      category: "Psicologia Infantil",
      icon: Heart,
      image: "/images/post1-danny.jpg",
      link: "https://www.instagram.com/psicologadannyelle/"
    },
    {
      title: "Brincar é treinar o corpo e a mente!",
      excerpt: "Entenda como a brincadeira pode ajudar nos estímulos da sua criança!",
      date: "14 de Julho, 2024",
      category: "Terapia",
      icon: Users,
      image: "/images/post2-danny.jpg",
      link: "https://www.instagram.com/psicologadannyelle/"
    },
    {
      title: "Brincadeiras que ajudam as crianças a lidarem com as emoções",
      excerpt: "Conheça as brincadeiras que podem ajudar sua criança a lidar com as emoções!",
      date: "15 de Julho, 2025",
      category: "Orientação Parental",
      icon: Brain,
      image: "/images/post3-danny.jpg",
      link: "https://www.instagram.com/psicologadannyelle/"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#935f35] mb-6">
            Mini Blog
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Compartilho insights, dicas e reflexões sobre saúde mental, desenvolvimento infantil 
            e bem-estar emocional para toda a família → @psicologadannyelle.
          </p>
        </motion.div>

        {/* Posts */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect border-0 h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                {/* Imagem responsiva */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img  
                    alt={post.title}
                    src={post.image}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <post.icon className="h-5 w-5 text-[#ae7c4c]" />
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 text-sm text-[#ae7c4c] mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-stone-800 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#ae7c4c] hover:text-[#ae7c4c] hover:bg-[#ae7c4c]-50 p-0 h-auto font-medium group"
                  >
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Botão final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#ae7c4c] text-[#ae7c4c] hover:bg-olive-50 px-8 py-4 rounded-full text-lg"
          >
            <a 
              href="https://www.instagram.com/psicologadannyelle/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver mais
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
