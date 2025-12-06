import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Conecta Datos",
    description: "Sube detalles de propiedades, planos CAD o intégrate con tu CRM existente.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Análisis de IA",
    description: "Nuestro motor procesa más de 50 variables: topografía, mercado y proyecciones urbanas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Obtén el Pronóstico",
    description: "Recibe un informe detallado con valor futuro, ROI estimado y mapa de riesgos.",
    image: "src/assets/images/Future.png"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-32 bg-base-200/50" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="text-center mb-24"
        >
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Proceso Simplificado</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Cómo Funciona</h2>
          <p className="text-xl text-base-content/60 max-w-2xl mx-auto">De datos brutos a insights accionables en tres simples pasos.</p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, delay: 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-3xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                <img 
                    src={step.image} 
                    alt={step.title} 
                    className="relative rounded-3xl shadow-xl w-full object-cover aspect-video z-10"
                />
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-content text-2xl font-bold mb-6 shadow-lg shadow-primary/30">
                  {step.number}
                </div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-xl text-base-content/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
