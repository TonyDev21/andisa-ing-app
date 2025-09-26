import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            <span className="text-primary">Contáctanos</span>
            <span className="block">Hoy Mismo</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Estamos listos para ayudarte con tu próximo proyecto. Obtén una cotización 
            personalizada y asesoramiento especializado sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="text-white">
            <h2 className="text-2xl font-light text-gray-300 mb-8">
              Estamos listos para ayudarte con las certificaciones que tu empresa necesita
            </h2>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Llamadas y WhatsApp</p>
                  <p className="text-white font-bold text-lg">(+51) 906-630-693</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-white font-bold">administracion@andisacertifications.com</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Horario</p>
                  <div className="space-y-1">
                    <p className="text-white">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-white">Sábado: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-12">
              <h3 className="text-white font-medium text-lg mb-4">Ubicación</h3>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p
                 className="text-white">Mza. P Lote. 31 Asc. las Cascadas de Javier Prado -Ate, Ate, Peru</p>
              </div>
              
              {/* Map placeholder - You can integrate Google Maps here */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Ubicación Andisa Certifications"
                  src="https://www.google.com/maps?q=-12.0453,-76.9527&z=16&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Envíanos tu Consulta</h3>
              <p className="text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Escribe tu mensaje aquí"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;