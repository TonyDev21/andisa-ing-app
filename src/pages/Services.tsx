import { Settings, Wrench, Zap, Shield, Cog, Hammer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Maquinado de Precisión',
      description: 'Fabricación de piezas con tolerancias mínimas utilizando maquinaria CNC de última generación.',
      features: ['Control numérico', 'Tolerancias micrométricas', 'Materiales diversos']
    },
    {
      icon: Wrench,
      title: 'Soldadura Especializada',
      description: 'Servicios de soldadura con certificaciones internacionales para proyectos críticos.',
      features: ['TIG, MIG, Arco manual', 'Certificación AWS', 'Materiales especiales']
    },
    {
      icon: Hammer,
      title: 'Fabricación Estructural',
      description: 'Diseño y construcción de estructuras metálicas para la industria y construcción.',
      features: ['Diseño 3D', 'Cálculo estructural', 'Montaje especializado']
    },
    {
      icon: Cog,
      title: 'Mantenimiento Industrial',
      description: 'Servicios de mantenimiento preventivo y correctivo para maquinaria industrial.',
      features: ['Diagnóstico técnico', 'Repuestos originales', 'Soporte 24/7']
    },
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Implementación de sistemas automatizados para optimizar procesos productivos.',
      features: ['Control PLC', 'Interfaces HMI', 'Integración IoT']
    },
    {
      icon: Shield,
      title: 'Consultoría Técnica',
      description: 'Asesoramiento especializado en procesos metalmecánicos y mejora continua.',
      features: ['Análisis de procesos', 'Optimización', 'Capacitación técnica']
    },
  ];

  return (
    <section id="servicios" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      {/* White Overlay with High Opacity */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una gama completa de servicios metalmecánicos con tecnología de vanguardia 
            y el respaldo de nuestros años de experiencia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              >
                <div className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-primary to-accent-700 h-2"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-secondary p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4">
              ¿Necesitas un Servicio Personalizado?
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Cada proyecto es único. Contáctanos para desarrollar una solución a medida 
              que se adapte perfectamente a tus necesidades específicas.
            </p>
            <button 
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;