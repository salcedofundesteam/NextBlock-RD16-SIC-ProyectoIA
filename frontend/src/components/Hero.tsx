import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-100 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent" />
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-12 z-10 px-6 max-w-7xl w-full">
        {/* Image Side */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 w-full"
        >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100">
                <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                    alt="Luxury Property AI Analysis" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4 text-white">
                    <p className="font-bold">Análisis de Valor</p>
                    <div className="flex justify-between items-end">
                        <span className="text-3xl font-extrabold">+12.5%</span>
                        <span className="badge badge-success">Crecimiento Proyectado</span>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Text Side */}
        <div className="flex-1 text-left">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <span className="badge badge-primary badge-outline mb-4 p-4 text-sm font-semibold tracking-wide">
                TECNOLOGÍA INMOBILIARIA DE PUNTA
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-base-content">
              Predice el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">valor futuro</span> de cualquier propiedad.
            </h1>
            <p className="py-6 text-xl text-base-content/70 leading-relaxed">
               NextBlock utiliza inteligencia artificial avanzada para analizar tendencias de mercado, terreno y más de 50 variables. Toma decisiones de inversión con confianza absoluta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/login" className="btn btn-primary btn-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Comienza Ahora
              </Link>
              <a href="#how-it-works" className="btn btn-ghost btn-lg border border-base-300 hover:bg-base-200">
                Ver Demo
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-base-content/50 text-sm">
                <div className="flex -space-x-3">
                    <div className="avatar">
                        <div className="w-8 rounded-full border-2 border-base-100">
                           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" />
                        </div>
                    </div>
                     <div className="avatar">
                        <div className="w-8 rounded-full border-2 border-base-100">
                           <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" />
                        </div>
                    </div>
                     <div className="avatar">
                        <div className="w-8 rounded-full border-2 border-base-100">
                           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" />
                        </div>
                    </div>
                </div>
                <p>Más de 2,000 inversores confían en nosotros.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
