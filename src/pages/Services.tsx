import { 
  Factory, 
  Building2, 
  Workflow, 
  Settings,
  Quote
} from 'lucide-react';
import { ServiceCard } from '../components/organisms/ServiceCard';

const Services = () => {
const services = [
  {
    id: '01',
    title: 'TANQUES',
    description: 'Especialistas en fabricación de tanques industriales con los más altos estándares de calidad y seguridad.',
    services: [
      'Fabricación de Tanques de Almacenamiento de Aceros al Carbono y de Aceros Inoxidables',
      'Fabricación de Tanques a Presión',
      'Fabricación de Tanques de Almacenamiento Bridados'
    ],
    image: 'https://res.cloudinary.com/dxnx6awui/image/upload/v1759009602/tanques_almacenamiento_hakkj1.jpg',
    icon: Factory
  },
  {
    id: '02',
    title: 'ESTRUCTURAS METÁLICAS',
    description: 'Diseño, fabricación e instalación de estructuras metálicas para todo tipo de proyectos industriales y comerciales.',
    services: [
      'Fabricación de Estructuras Livianas',
      'Fabricación de Estructuras Medianas',
      'Fabricación de Estructuras Pesadas',
      'Fabricación de Estructuras Extra pesadas',
      'Fabricación de Estructuras para Puentes Viales'
    ],
    image: 'https://res.cloudinary.com/dxnx6awui/image/upload/v1759010107/estructura_metalica_techo_trdpuy.jpg',
    icon: Building2
  },
  {
    id: '03',
    title: 'SPOOLS',
    description: 'Fabricación especializada de spools para sistemas de tuberías industriales con precisión y calidad garantizada.',
    services: [
      'Fabricación de Spool de Aceros al Carbono',
      'Fabricación de Spool de Aceros Inoxidables',
      'Fabricación de Tuberías Ranuradas'
    ],
    image: 'https://res.cloudinary.com/dxnx6awui/image/upload/v1759011477/tuberia_ranuradas_q9vfgu.jpg',
    icon: Workflow
  },
  {
    id: '04',
    title: 'ADEMÁS DE...',
    description: 'Servicios complementarios especializados para completar todas las necesidades de su proyecto industrial.',
    services: [
      'Fabricación y Soldadura de Tuberías HDPE',
      'Reparación y Mecanizados',
      'Instalación y Montajes',
      'Proyectos Integrales',
      'Asesoría técnica',
      'Servicio de Metalizado (en frío)'
    ],
    image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Settings
  }
];

   return (
    <section className="relative py-20 overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            ¡Nuestros Servicios!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales en fabricación, montaje y mantenimiento industrial
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="relative">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote className="text-emerald-200 mb-6" size={48} />
                <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">
                  "Nuestra experiencia y compromiso con la calidad nos posiciona como líderes 
                  en el sector industrial, brindando soluciones innovadoras y confiables."
                </blockquote>
                <div className="text-emerald-100">
                  <p className="font-semibold">Ing. Anderson Francisco</p>
                  <p className="text-sm opacity-90">Sánchez Cárdenas</p>
                  <p className="text-sm opacity-90">Gerente General</p>
                </div>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src="https://res.cloudinary.com/dxnx6awui/image/upload/v1759007646/Logo_lwcpjk.png" 
                  alt="Industrial Construction" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para iniciar tu proyecto?
            </h2>
            <p className="text-white mb-8 text-lg">
              Contáctanos y obtén una consultoría gratuita para tu proyecto industrial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;