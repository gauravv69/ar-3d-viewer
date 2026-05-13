import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark z-50">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Ring */}
        <motion.div
          className="absolute inset-0 m-auto w-16 h-16 border-4 border-secondary/20 border-b-secondary rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center Glow */}
        <div className="absolute inset-0 m-auto w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(0,242,254,0.8)] animate-pulse" />
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 text-primary font-mono tracking-widest uppercase text-sm"
      >
        Initialising AR System...
      </motion.p>
    </div>
  );
};

export default Loader;
