import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login delay
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 relative overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-20 blur-sm"
                alt="Office background"
             />
             <div className="absolute inset-0 bg-base-100/40" />
        </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="card w-full max-w-md bg-base-100/90 backdrop-blur-xl shadow-2xl z-10 border border-white/50"
      >
        <div className="card-body p-10">
          <div className="text-center mb-8">
             <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mb-2">NextBlock</Link>
             <h2 className="text-2xl font-bold text-base-content">Bienvenido de Nuevo</h2>
             <p className="text-base-content/60 mt-2">Ingresa tus credenciales para acceder al panel.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Correo Electrónico</span>
              </label>
              <input 
                type="email" 
                placeholder="usuario@ejemplo.com" 
                className="input input-bordered w-full bg-white/50 focus:bg-white transition-colors h-12" 
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Contraseña</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full bg-white/50 focus:bg-white transition-colors h-12" 
                required 
              />
            </div>
            <div className="form-control mt-8">
              <button disabled={loading} className="btn btn-primary w-full h-12 text-lg font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
                {loading ? <span className="loading loading-spinner loading-md"></span> : 'Iniciar Sesión'}
              </button>
            </div>
          </form>
          
          <div className="text-center mt-6 text-sm">
             ¿No tienes una cuenta? <a className="link link-primary font-bold">Solicitar Acceso</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
