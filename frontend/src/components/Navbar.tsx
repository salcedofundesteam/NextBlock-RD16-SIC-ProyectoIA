import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#features">Características</a></li>
            <li><a href="#how-it-works">Cómo Funciona</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NextBlock</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a href="#features">Características</a></li>
          <li><a href="#how-it-works">Cómo Funciona</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary btn-sm px-6">Ingresar</Link>
      </div>
    </div>
  );
};

export default Navbar;
