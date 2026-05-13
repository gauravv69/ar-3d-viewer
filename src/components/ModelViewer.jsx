import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';
import { Smartphone } from 'lucide-react';

const ModelViewer = ({ modelUrl, iosUrl, posterUrl, altText }) => {
  const modelRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelRef.current;
    if (modelViewer) {
      modelViewer.addEventListener('load', () => {
        console.log('Model loaded successfully');
      });
    }
  }, []);

  const handleARClick = () => {
    if (modelRef.current) {
      modelRef.current.activateAR();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark">
      <model-viewer
        ref={modelRef}
        src={modelUrl}
        ios-src={iosUrl}
        poster={posterUrl}
        alt={altText}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        environment-image="neutral"
        exposure="1"
        interaction-prompt="auto"
        ar-placement="floor"
        touch-action="pan-y"
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
      >
        {/* AR Hand Prompt (optional visual aid) */}
        <div id="ar-prompt">
          <img src="https://modelviewer.dev/assets/hand.png" alt="AR interaction prompt" />
        </div>

        {/* Loading slot is handled by our custom Loader in App.jsx, 
            but model-viewer has its own progress bar by default */}
      </model-viewer>

      {/* Manual AR Button - MOVED OUTSIDE model-viewer tag */}
      <button
        onClick={handleARClick}
        style={{ 
          bottom: '50%',
          background: 'linear-gradient(45deg, #00f2fe 0%, #4facfe 100%)',
          transform: 'translate(-50%, 50%)',
          zIndex: 9999
        }}
        className="fixed left-1/2 text-dark font-black py-4 px-12 rounded-full shadow-[0_0_50px_rgba(0,242,254,1)] hover:scale-110 active:scale-95 transition-all flex items-center gap-3 border-none cursor-pointer whitespace-nowrap"
      >
        <Smartphone className="w-6 h-6" />
        <span className="text-xl tracking-[0.2em] uppercase font-black">Launch AR View</span>
      </button>
    </div>
  );
};

export default ModelViewer;
