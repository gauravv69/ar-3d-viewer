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
        camera-orbit="0deg 75deg 105%"
        camera-target="0m 0.5m 0m"
        field-of-view="30deg"
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
      >
        {/* AR Hand Prompt (optional visual aid) */}
        <div id="ar-prompt">
          <img src="https://modelviewer.dev/assets/hand.png" alt="AR interaction prompt" />
        </div>

        {/* Loading slot is handled by our custom Loader in App.jsx, 
            but model-viewer has its own progress bar by default */}
      </model-viewer>

      {/* Manual AR Button - Forced Centering on Desktop */}
      <button
        onClick={handleARClick}
        style={{ 
          zIndex: 9999
        }}
        className="fixed bottom-[210px] inset-x-6 md:inset-x-auto md:left-1/2 md:w-80 md:-translate-x-1/2 bg-primary/20 backdrop-blur-xl text-primary font-bold py-3.5 px-6 rounded-2xl border border-primary/30 shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
      >
        <Smartphone className="w-5 h-5" />
        <span className="text-base tracking-[0.15em] uppercase font-black">Launch AR Experience</span>
      </button>
    </div>
  );
};

export default ModelViewer;
