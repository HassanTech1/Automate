
import React, { useState } from 'react';

interface Cube3DProps {
  size?: number;
  className?: string;
}

const Cube3D: React.FC<Cube3DProps> = ({ size = 200, className = "" }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className={`cube-container ${className}`} 
      style={{ width: size, height: size }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`cube animate-cube-spin ${isPaused ? 'cube-paused' : ''}`}
      >
        <div className="cube-face cube-front">
          <img 
            src="/lovable-uploads/45abdda0-f832-4440-bfcd-3ef98bf12dec.png" 
            alt="Ubertrix Logo" 
            className="w-3/4 h-3/4 object-contain" 
          />
        </div>
        <div className="cube-face cube-back">
          <div className="text-ubertrix-primary font-bold text-xl">AI</div>
        </div>
        <div className="cube-face cube-right">
          <div className="text-ubertrix-primary font-bold text-xl">ML</div>
        </div>
        <div className="cube-face cube-left">
          <div className="text-ubertrix-primary font-bold text-xl">Data</div>
        </div>
        <div className="cube-face cube-top">
          <div className="text-ubertrix-primary font-bold text-xl">Vision</div>
        </div>
        <div className="cube-face cube-bottom">
          <div className="text-ubertrix-primary font-bold text-xl">NLP</div>
        </div>
      </div>
    </div>
  );
};

export default Cube3D;
