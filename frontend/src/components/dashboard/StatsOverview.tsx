import React from 'react';
import { ArrowUpRight, CheckCircle, Users } from 'lucide-react';

const StatsOverview: React.FC = () => {
  return (
    <div className="col-span-1 lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="stats shadow-sm border border-base-200 bg-base-100">
        <div className="stat">
          <div className="stat-figure text-primary">
            <ArrowUpRight size={24} />
          </div>
          <div className="stat-title">Predicciones Totales</div>
          <div className="stat-value text-primary">1,245</div>
          <div className="stat-desc">21% más que el mes pasado</div>
        </div>
      </div>
      
      <div className="stats shadow-sm border border-base-200 bg-base-100">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <CheckCircle size={24} />
          </div>
          <div className="stat-title">Precisión de IA</div>
          <div className="stat-value text-secondary">98.2%</div>
          <div className="stat-desc">Última validación hoy</div>
        </div>
      </div>
      
      <div className="stats shadow-sm border border-base-200 bg-base-100">
        <div className="stat">
          <div className="stat-figure text-accent">
            <Users size={24} />
          </div>
          <div className="stat-title">Usuarios Activos</div>
          <div className="stat-value">205</div>
          <div className="stat-desc">↗︎ 32 usuarios nuevos</div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
