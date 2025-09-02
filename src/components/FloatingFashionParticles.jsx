import React from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '../store';

const FloatingFashionParticles = () => {
  const { theme } = useUIStore();

  // Create multiple layers of particles for depth
  const createParticleLayer = (count, size, speed, opacity) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * size + size * 0.5,
      duration: Math.random() * speed + speed * 0.5,
      delay: Math.random() * 5,
      opacity: opacity
    }));
  };

  const backgroundParticles = createParticleLayer(30, 4, 20, 0.1);
  const midParticles = createParticleLayer(20, 6, 15, 0.2);
  const foregroundParticles = createParticleLayer(15, 8, 10, 0.3);

  // Fashion symbols for particles
  const fashionSymbols = ['👕', '👖', '👗', '🧥', '👠', '👜', '👒', '💍', '🕶️', '🧣', '💎', '✨', '🌟', '💫', '⭐'];
  
  // Abstract geometric shapes
  const geometricShapes = ['◆', '●', '▲', '■', '♦', '♠', '♣', '♥', '⚡', '🔥', '💧', '🌊', '🌈', '☀️', '🌙'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: theme === 'dark' 
            ? [
                'radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)',
                'radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)',
                'radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)'
              ]
            : [
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)',
                'radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                'radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
              ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Mesh Grid */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 5}
              x2="100"
              y2={i * 5}
              stroke={theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(59, 130, 246, 0.1)'}
              strokeWidth="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          {Array.from({ length: 20 }, (_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 5}
              y1="0"
              x2={i * 5}
              y2="100"
              stroke={theme === 'dark' ? 'rgba(236, 72, 153, 0.1)' : 'rgba(147, 51, 234, 0.1)'}
              strokeWidth="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: i * 0.1 + 1, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </div>

      {/* Background Particle Layer */}
      {backgroundParticles.map((particle) => (
        <motion.div
          key={`bg-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: theme === 'dark' 
              ? 'rgba(147, 51, 234, 0.1)' 
              : 'rgba(59, 130, 246, 0.1)',
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Mid Layer Particles */}
      {midParticles.map((particle) => (
        <motion.div
          key={`mid-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: theme === 'dark' 
              ? 'rgba(236, 72, 153, 0.15)' 
              : 'rgba(147, 51, 234, 0.15)',
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Foreground Fashion Symbols */}
      {foregroundParticles.map((particle, index) => (
        <motion.div
          key={`fg-${particle.id}`}
          className="absolute text-2xl select-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        >
          {index % 2 === 0 
            ? fashionSymbols[index % fashionSymbols.length]
            : geometricShapes[index % geometricShapes.length]
          }
        </motion.div>
      ))}

      {/* Floating Light Orbs */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-40 h-40 rounded-full blur-3xl ${
          theme === 'dark' 
            ? 'bg-purple-500/30' 
            : 'bg-blue-400/20'
        }`}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl ${
          theme === 'dark' 
            ? 'bg-pink-500/30' 
            : 'bg-purple-400/20'
        }`}
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -30, 0],
          y: [0, 25, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Animated Fashion Runway */}
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        {/* Moving Light Beams */}
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={`beam-${i}`}
            className={`absolute bottom-${i * 8} left-0 w-full h-1 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' 
                : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
            }`}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
        
        {/* Spotlight Effects */}
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`spotlight-${i}`}
            className={`absolute bottom-0 w-32 h-32 ${
              theme === 'dark' 
                ? 'bg-gradient-to-t from-purple-500/20 to-transparent' 
                : 'bg-gradient-to-t from-blue-500/20 to-transparent'
            } rounded-full blur-2xl`}
            style={{
              left: `${20 + i * 30}%`
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Patterns */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Animated Circles */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.circle
              key={`circle-${i}`}
              cx={15 + i * 10}
              cy={20 + (i % 3) * 30}
              r="0.5"
              fill={theme === 'dark' ? 'rgba(147, 51, 234, 0.3)' : 'rgba(59, 130, 246, 0.3)'}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Animated Triangles */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.polygon
              key={`triangle-${i}`}
              points={`${80 - i * 8},${15 + i * 12} ${85 - i * 8},${25 + i * 12} ${75 - i * 8},${25 + i * 12}`}
              fill={theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(147, 51, 234, 0.3)'}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </svg>
      </div>

      {/* Particle Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={`rain-${i}`}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' 
                ? 'bg-purple-400/40' 
                : 'bg-blue-400/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10px'
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingFashionParticles;
