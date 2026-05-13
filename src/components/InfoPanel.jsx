import React from 'react';
import { motion } from 'framer-motion';
import { Info, Smartphone, Maximize2, RotateCcw } from 'lucide-react';

const InfoPanel = ({ modelName, projectTitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-6 right-6 md:right-auto md:w-80 glass-card rounded-2xl p-5 z-30"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h1 className="text-xl font-bold text-white mb-0.5">{projectTitle}</h1>
          <p className="text-primary text-[10px] font-mono uppercase tracking-wider">{modelName}</p>
        </div>
        <div className="bg-primary/10 p-1.5 rounded-lg">
          <Info className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      <div className="flex gap-4 items-center mb-2">
        <div className="flex items-center gap-2 text-white/70 text-[11px]">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile AR Ready</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
          <Maximize2 className="w-3.5 h-3.5 mx-auto mb-1 text-secondary" />
          <span className="text-[9px] uppercase text-white/50">Move</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
          <RotateCcw className="w-3.5 h-3.5 mx-auto mb-1 text-secondary" />
          <span className="text-[9px] uppercase text-white/50">360 View</span>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoPanel;
