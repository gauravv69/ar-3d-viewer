import React from 'react';
import { Box, Cpu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/5 z-40 px-6 py-4 flex justify-center items-center">
      <div className="flex items-center gap-2">
        <div className="bg-primary/20 p-2 rounded-lg border border-primary/50">
          <Cpu className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">
          NOVA <span className="text-primary">AR</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
