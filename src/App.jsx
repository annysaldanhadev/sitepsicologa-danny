
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Danny Elle - Psicóloga Clínica | Cuidado emocional para cada etapa</title>
        <meta 
          name="description" 
          content="Danny Elle, psicóloga clínica especializada em crianças e adultos. Oferecendo suporte psicológico com abordagem lúdica, comportamental e centrada no cliente. Especialista em psicologia infantil e orientação parental em São Paulo." 
        />
        <meta name="keywords" content="psicóloga, psicologia infantil, orientação parental, terapia, São Paulo, Danny Elle, psicóloga clínica, crianças, adultos" />
        <meta name="author" content="Danny Elle" />
        <meta property="og:title" content="Danny Elle - Psicóloga Clínica | Cuidado emocional para cada etapa" />
        <meta property="og:description" content="Psicóloga clínica especializada em crianças e adultos com abordagem lúdica e centrada no cliente." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dannyelle.com.br" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
