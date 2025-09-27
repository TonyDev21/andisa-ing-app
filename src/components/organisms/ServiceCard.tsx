
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  services: string[];
  image: string;
  icon: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  services,
  image,
  icon: Icon,
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
          {id}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-emerald-100 text-primary rounded-lg">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2 flex-1">
          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
            Servicios incluidos:
          </h4>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="mt-6 w-full bg-primary hover:bg-accent-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          Ver más detalles
        </button>
      </div>
    </div>
  );
};