import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Settings, Users } from 'lucide-react';

const Hero: React.FC = () => {
  // Array de imágenes de construcción/metalmecánica
  const backgroundImages = [
    'https://res.cloudinary.com/dxnx6awui/image/upload/v1758859940/test_m4lsyr.jpg',
    'https://res.cloudinary.com/dxnx6awui/image/upload/v1758868887/bg01_bse9ai.jpg', 
    'https://res.cloudinary.com/dxnx6awui/image/upload/v1758868899/bg02_ed3wwa.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const stats = [
    {
      icon: Award,
      number: '+5',
      label: 'Años',
      description: 'de experiencia',
    },
    {
      icon: Users,
      number: 'Líderes',
      label: '',
      description: 'en nuestro sector',
    },
    {
      icon: Settings,
      number: 'Alta',
      label: 'Tecnología',
      description: 'Conocimientos modernos y especializados',
    },
  ];

  return (
    <section 
      id='inicio'
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Crossfade Effect */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(48, 49, 53, 0.8) 0%, rgba(0, 116, 61, 0.6) 100%), url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#303135]/60 to-[#00743d]/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Líderes en</span>
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Metalmecánica
                </span>
                <span className="block text-[#00743d]">& Tecnología</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Más de 5 años de experiencia adoptando los conocimientos más modernos de la alta tecnología en metalmecánica y servicios especializados.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-[#303135] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Ver Servicios</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-[#00743d] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#00743d] hover:transform hover:scale-105 hover:shadow-xl">
                Contáctanos
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#00743d] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-white">{stat.number}</span>
                      <span className="text-lg font-semibold text-gray-300">{stat.label}</span>
                    </div>
                    <p className="text-gray-300 mt-1">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;