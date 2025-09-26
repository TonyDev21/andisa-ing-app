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
              Nuestra Historia de Éxito
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Desde nuestros inicios, nos hemos distinguido por nuestra capacidad de adaptación 
                y evolución constante. Nuestra experiencia de más de 5 años nos ha permitido 
                perfeccionar nuestros procesos y expandir nuestros servicios.
              </p>
              <p>
                Somos líderes reconocidos en los sectores donde operamos, gracias a nuestro 
                enfoque en la innovación tecnológica y la excelencia operativa. Cada proyecto 
                es una oportunidad para demostrar nuestro compromiso con la calidad.
              </p>
              <p>
                Nuestro equipo de profesionales especializados trabaja con las herramientas 
                más avanzadas del mercado, garantizando resultados que superan las expectativas 
                de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-accent-700 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Misión</h4>
              <p className="leading-relaxed">
                Proporcionar soluciones metalmecánicas de vanguardia, integrando tecnología 
                de punta con la experiencia humana para crear valor duradero para nuestros clientes.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Visión</h4>
              <p className="leading-relaxed">
                Ser la empresa líder en metalmecánica y servicios tecnológicos especializados, 
                reconocida por nuestra innovación, calidad y compromiso con la excelencia.
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