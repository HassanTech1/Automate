
import React, { useState, useEffect } from 'react';

interface MouseFollowerProps {
  className?: string;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; opacity: number; id: number }>>([]);
  const [nextParticleId, setNextParticleId] = useState(0);

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add a new particle at the mouse position
      if (Math.random() > 0.7) { // Only add a particle 30% of the time to avoid overloading
        const size = Math.random() * 5 + 1;
        setParticles(prevParticles => [
          ...prevParticles, 
          { 
            x: e.clientX, 
            y: e.clientY, 
            size,
            opacity: 0.7,
            id: nextParticleId
          }
        ]);
        setNextParticleId(id => id + 1);
      }
    };

    // Animate and remove particles over time
    const animationInterval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.02,
            x: particle.x + (Math.random() - 0.5) * 2,
            y: particle.y + (Math.random() - 0.5) * 2,
          }))
          .filter(particle => particle.opacity > 0)
      );
    }, 50);

    // Generate data paths periodically
    const dataPathInterval = setInterval(() => {
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      const pathPoints = Array(5).fill(0).map((_, index) => {
        const distance = 50 + Math.random() * 100;
        const angle = Math.random() * Math.PI * 2;
        return {
          x: startX + Math.cos(angle) * distance * (index + 1),
          y: startY + Math.sin(angle) * distance * (index + 1),
          size: 3 - index * 0.4,
          opacity: 0.8,
          id: nextParticleId + index
        };
      });
      
      setParticles(prev => [...prev, ...pathPoints]);
      setNextParticleId(id => id + pathPoints.length);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(animationInterval);
      clearInterval(dataPathInterval);
    };
  }, [nextParticleId]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full pointer-events-none z-10 ${className}`}>
      {/* Main cursor effect */}
      <div 
        className="absolute rounded-full bg-ubertrix-primary bg-opacity-20 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          filter: 'blur(8px)'
        }}
      />
      
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-ubertrix-primary transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Data connection lines */}
      <svg className="absolute top-0 left-0 w-full h-full">
        {particles.map((particle, index) => {
          if (index % 3 === 0) return null; // Draw lines only from some particles
          
          // Find closest particles to connect to
          const closestParticles = [...particles]
            .filter(p => p.id !== particle.id)
            .sort((a, b) => {
              const distA = Math.hypot(a.x - particle.x, a.y - particle.y);
              const distB = Math.hypot(b.x - particle.x, b.y - particle.y);
              return distA - distB;
            })
            .slice(0, 2); // Get 2 closest particles
            
          return closestParticles.map((target, idx) => {
            const distance = Math.hypot(target.x - particle.x, target.y - particle.y);
            if (distance > 100) return null; // Don't draw lines that are too long
            
            const opacity = (1 - distance / 100) * 0.3 * particle.opacity * target.opacity;
            
            return (
              <line
                key={`${particle.id}-${target.id}-${idx}`}
                x1={particle.x}
                y1={particle.y}
                x2={target.x}
                y2={target.y}
                stroke={`rgba(249, 168, 37, ${opacity})`}
                strokeWidth="0.5"
              />
            );
          });
        })}
      </svg>
    </div>
  );
};

export default MouseFollower;
