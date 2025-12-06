import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, PieChart, Users, Settings } from 'lucide-react';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-base-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col">
         <div className="p-6">
            <h1 className="text-2xl font-bold text-primary">NextBlock</h1>
         </div>
         <ul className="menu p-4 w-full h-full text-base-content space-y-2">
            <li><a className="active"><LayoutDashboard size={20}/> Tablero</a></li>
            <li><a><PieChart size={20}/> Análisis</a></li>
            <li><a><Users size={20}/> Clientes</a></li>
            <li><a><Settings size={20}/> Configuración</a></li>
         </ul>
         <div className="p-4 border-t border-base-200">
             <button onClick={handleLogout} className="btn btn-outline btn-error w-full gap-2">
                <LogOut size={18} /> Salir
             </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
         <div className="flex justify-between items-center mb-8">
            <div>
               <h2 className="text-3xl font-bold">Panel de Administración</h2>
               <p className="text-base-content/70">Bienvenido de nuevo, Administrador.</p>
            </div>
            <div className="lg:hidden">
              <button onClick={handleLogout} className="btn btn-sm btn-error">Salir</button>
            </div>
         </div>

         {/* Placeholder Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Predicciones Totales</div>
                <div className="stat-value text-primary">1,245</div>
                <div className="stat-desc">21% más que el mes pasado</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Precisión de IA</div>
                <div className="stat-value text-secondary">98.2%</div>
                <div className="stat-desc">Última validación hoy</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Usuarios Activos</div>
                <div className="stat-value">205</div>
                <div className="stat-desc">↗︎ 32 usuarios nuevos</div>
              </div>
            </div>
         </div>

         <div className="card w-full bg-base-100 shadow-xl min-h-[400px]">
            <div className="card-body items-center justify-center text-center">
               <PieChart size={64} className="text-base-content/20 mb-4" />
               <h3 className="text-xl font-bold text-base-content/50">Marcador de Posición de Vista de Análisis</h3>
               <p className="text-base-content/40">Los gráficos detallados se implementarán aquí.</p>
            </div>
         </div>
      </main>
    </div>
  );
};

export default AdminPage;
