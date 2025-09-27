import { Target, Lightbulb, Trophy, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precisión',
      description: 'Trabajos ejecutados con la máxima precisión y atención al detalle.',
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Aplicamos las últimas tecnologías para soluciones innovadoras.',
    },
    {
      icon: Trophy,
      title: 'Excelencia',
      description: 'Comprometidos con la calidad superior en cada proyecto.',
    },
    {
      icon: Zap,
      title: 'Eficiencia',
      description: 'Procesos optimizados para resultados rápidos y efectivos.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            ¡Acerca de nosotros!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Durante más de 5 años hemos sido pioneros en la adopción de tecnologías avanzadas 
            en el sector metalmecánico, estableciéndonos como líderes en innovación y calidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary">
              ¿Quiénes <span className='text-3xl font-bold text-primary'>somos?</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Somos ANDISA INGENIERIA, CONSTRUCCIÓN Y MANTENIMIENTO SAC; una empresa 100% peruana, con más de 5 años de experiencia, adoptando los modernos conocimientos de la alta tecnología en metalmecánica y otros servicios que ofrecemos, siendo líderes en los sectores que operamos. Aplicamos las normas debidas para ejecutar servicios en base a ley.
              </p>
              <div className='flex justify-center'>
                <img src="https://res.cloudinary.com/dxnx6awui/image/upload/v1759007999/Logo_v2_ibcqkg.png" alt="andisa-ingenieria"/>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-accent-700 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Misión</h4>
              <p className="leading-relaxed text-justify">
                Estamos orientados a la fabricación, recuperación de piezas, repuestos y accesorios de óptima calidad aplicando los niveles de eficiencia de la reingeniería técnica y el aseguramiento de la calidad y enfocado en la mejora continua con el fin de satisfacer las necesidades de nuestros clientes además de rebasar sus expectativas.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Visión</h4>
              <p className="leading-relaxed text-justify">
                Ser una empresa líder en la industria metalmecánica, reconocida en el mercado nacional por su productividad, eficiencia e innovación, promoviendo estándares de calidad que mantengan e impulsen el desarrollo industrial, fortaleciendo la competitividad y brindando respaldo técnico confiable y soluciones sostenibles a nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;