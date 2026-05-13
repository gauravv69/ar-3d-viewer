import React from 'react';
import { Box, Cpu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full glass-navbar z-40 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-primary/20 p-2 rounded-lg border border-primary/50">
          <Cpu className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">
          NOVA <span className="text-primary">AR</span>
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-6 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-primary transition-colors">Models</a>
          <a href="#" className="hover:text-primary transition-colors">Lab</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
        </div>
        <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-semibold transition-all border border-white/10">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
