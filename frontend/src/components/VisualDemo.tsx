import React from 'react';
import { motion } from 'framer-motion';

const VisualDemo: React.FC = () => {
  return (
    <div className="py-32 bg-base-100 overflow-hidden relative" id="demo">
      {/* Background Map Image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Map background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Datos Reales</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Inteligencia Visual</h2>
            <p className="text-xl text-base-content/70 mb-8 leading-relaxed">
              Ve más allá de lo obvio. Nuestros gráficos interactivos visualizan la volatilidad del mercado, potencial de crecimiento y dinámicas del vecindario con una claridad asombrosa.
            </p>
            <ul className="space-y-4 text-lg text-base-content/80">
              <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  Evolución histórica de precios
              </li>
              <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  Curvas de proyección de tendencias futuras
              </li>
              <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-accent" />
                  Análisis comparativo de vecindarios
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="flex-1 w-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="mockup-window border border-base-300 bg-base-100 shadow-2xl"
           >
             <div className="flex justify-center px-4 py-8 bg-base-200/50 backdrop-blur-sm relative overflow-hidden">
                {/* Simulated Chart Container */}
                <div className="w-full h-80 bg-white rounded-xl p-6 shadow-sm relative flex items-end justify-between gap-2 border border-base-200">
                    
                   {[30, 45, 35, 60, 50, 75].map((h, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         whileInView={{ height: `${h}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                         className="w-[12%] bg-gradient-to-t from-primary/80 to-primary rounded-t-md opacity-80"
                       />
                   ))}

                   {/* Future Projection Bar */}
                   <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="w-[12%] bg-gradient-to-t from-accent/80 to-accent rounded-t-md relative group cursor-pointer"
                   >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 badge badge-accent text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          +24% ROI (2026)
                      </div>
                   </motion.div>
                   
                   {/* Line overlay */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none p-6" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.path 
                        d="M0 70 L 16 55 L 32 65 L 48 40 L 64 50 L 80 25 L 96 10" 
                        fill="none" 
                        stroke="#f59e0b" // Amber-500
                        strokeWidth="3" 
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                      />
                   </svg>
                </div>
             </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisualDemo;
