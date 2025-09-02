import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useUIStore } from '../store';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useUIStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-16 group overflow-hidden"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main Button Background */}
      <motion.div 
        className="absolute inset-0 rounded-2xl shadow-2xl"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
        }}
        whileHover={{
          boxShadow: theme === 'dark' 
            ? '0 0 40px rgba(147, 51, 234, 0.6), 0 0 80px rgba(236, 72, 153, 0.4)'
            : '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(147, 51, 234, 0.4)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)'
            : 'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)'
        }}
        animate={{
          background: theme === 'dark'
            ? [
                'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)',
                'linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899)',
                'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)'
              ]
            : [
                'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)',
                'linear-gradient(45deg, #8b5cf6, #3b82f6, #8b5cf6)',
                'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)'
              ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner Background */}
      <motion.div 
        className="absolute inset-1 rounded-xl"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' 
                ? 'bg-purple-400' 
                : 'bg-blue-400'
            }`}
            style={{
              left: `${20 + i * 10}%`,
              top: `${15 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Icon Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              stiffness: 300,
              damping: 20
            }}
            className="flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <div className="relative">
                <Sun className="w-8 h-8 text-amber-400" />
                
                {/* Sun Rays */}
                <div className="absolute inset-0 w-8 h-8">
                  {Array.from({ length: 8 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-2 bg-amber-400 rounded-full origin-bottom"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px)`
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>

                {/* Sun Glow */}
                <motion.div
                  className="absolute inset-0 w-8 h-8 bg-amber-400 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            ) : (
              <div className="relative">
                <Moon className="w-8 h-8 text-slate-700" />
                
                {/* Moon Craters */}
                <div className="absolute inset-0 w-8 h-8">
                  {Array.from({ length: 3 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-slate-600 rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${25 + i * 15}%`
                      }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </div>

                {/* Moon Glow */}
                <motion.div
                  className="absolute inset-0 w-8 h-8 bg-slate-700 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Click Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)'
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <Sparkles className={`w-3 h-3 ${
              theme === 'dark' ? 'text-purple-400' : 'text-blue-400'
            }`} />
          </motion.div>
        ))}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
