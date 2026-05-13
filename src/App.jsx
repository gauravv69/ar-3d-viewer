import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ModelViewer from './components/ModelViewer';
import Loader from './components/Loader';
import InfoPanel from './components/InfoPanel';
import { motion, AnimatePresence } from 'framer-motion';
import robotModel from './assets/models/robot.glb';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay for the initial system initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const modelConfig = {
    url: robotModel,
    iosUrl: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.usdz',
    name: 'X-100 Autonomous Unit',
    project: 'NOVA FRONTIER',
    poster: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.webp'
  };

  return (
    <div className="relative w-full h-screen bg-dark overflow-hidden">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <>
            <Navbar />
            <main className="w-full h-full pt-16">
              <ModelViewer 
                modelUrl={modelConfig.url} 
                iosUrl={modelConfig.iosUrl}
                posterUrl={modelConfig.poster}
                altText={modelConfig.name}
              />
            </main>

            <InfoPanel 
              modelName={modelConfig.name}
              projectTitle={modelConfig.project}
            />
          </>
        )}
      </AnimatePresence>

      {/* Decorative background elements */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}

export default App;
