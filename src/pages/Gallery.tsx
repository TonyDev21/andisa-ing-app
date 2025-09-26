import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Using Pexels images for the gallery
  const projects = [
    {
      title: 'Estructura Industrial',
      category: 'Construcción',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Maquinado CNC',
      category: 'Precisión',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Soldadura Especializada',
      category: 'Fabricación',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Automatización Industrial',
      category: 'Tecnología',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Estructura Industrial',
      category: 'Construcción',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Control de Calidad',
      category: 'Inspección',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Herramientas Especializadas',
      category: 'Equipos',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Proyecto Industrial',
      category: 'Complejo',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(selectedImage !== null ? (selectedImage + 1) % projects.length : 0);
  };

  const prevImage = () => {
    setSelectedImage(selectedImage !== null ? (selectedImage - 1 + projects.length) % projects.length : 0);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Galería de Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre algunos de nuestros trabajos más destacados y la calidad que nos caracteriza 
            en cada proyecto realizado.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">{project.title}</h4>
                  <p className="text-sm text-gray-200">{project.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Proyectos Completados</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600">Tasa de Satisfacción</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            <img 
              src={projects[selectedImage].image} 
              alt={projects[selectedImage].title}
              className="w-full h-auto max-h-screen object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold">{projects[selectedImage].title}</h3>
              <p className="text-gray-200">{projects[selectedImage].category}</p>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;