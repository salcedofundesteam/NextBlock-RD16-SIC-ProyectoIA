import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const icons = {
  TrendingUp,
  ShieldCheck,
  Zap
};

const features = [
  {
    title: "Predicción de Mercado",
    description: "Pronostica valores futuros de propiedades hasta con 5 años de anticipación usando nuestros modelos de aprendizaje profundo.",
    icon: "TrendingUp",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Evaluación de Riesgos",
    description: "Identifica posibles caídas del mercado y riesgos de inversión antes de que sucedan.",
    icon: "ShieldCheck",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Análisis Instantáneo",
    description: "Obtén informes completos sobre cualquier propiedad o terreno en segundos, no semanas.",
    icon: "Zap",
    color: "bg-amber-100 text-amber-600"
  }
];

const Features: React.FC = () => {
  return (
    <div className="py-32 bg-base-100 relative" id="features">
       {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0 }}
            className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nuestras Capacidades</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-base-content">¿Por qué elegir NextBlock?</h2>
          <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
             Transformamos la incertidumbre en confianza. Nuestra tecnología te da la ventaja que necesitas en el mercado inmobiliario.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.0, delay: index * 0.3, ease: "easeOut" }}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-200 group"
              >
                <div className="card-body items-start text-left p-10">
                  <div className={`p-4 rounded-2xl mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="card-title text-2xl mb-4 font-bold text-base-content">{feature.title}</h3>
                  <p className="text-base-content/70 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
