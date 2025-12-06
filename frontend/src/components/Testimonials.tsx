import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Inversionista Inmobiliaria",
    quote: "NextBlock me ayudó a evitar una mala inversión en un vecindario en declive. ¡Me ahorró miles!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chen",
    role: "Desarrollador de Propiedades",
    quote: "La precisión predictiva es asombrosamente buena. Ahora es un procedimiento estándar para todas nuestras adquisiciones.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Dueña de Agencia",
    quote: "Un cambio de juego para nuestros clientes. Podemos respaldar nuestras recomendaciones con datos sólidos.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-32 bg-base-200" id="testimonials">
       <div className="container mx-auto px-6">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="text-center mb-20"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">Confiado por Expertos</h2>
           <p className="text-xl text-base-content/60">Únete a la nueva era de la inteligencia inmobiliaria.</p>
         </motion.div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="card bg-base-100 shadow-xl border border-base-100 hover:border-primary/20 transition-colors duration-300"
              >
                <div className="card-body">
                  <div className="rating rating-sm mb-6">
                    {[1,2,3,4,5].map(s => <input key={s} type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />)}
                  </div>
                  <p className="italic text-lg text-base-content/80 mb-6 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={t.image} alt={t.name} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.name}</h4>
                      <p className="text-sm text-base-content/60 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
       </div>
    </div>
  );
};

export default Testimonials;
