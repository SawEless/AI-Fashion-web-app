import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Sparkles, Zap, Star, Crown, TrendingUp, ArrowRight, Eraser, Download } from 'lucide-react';

const CoDesign = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ef4444');
  const [size, setSize] = useState(6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x, y };
  };

  const handleDown = (e) => {
    setIsDrawing(true);
    const { x, y } = getPos(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handleMove = (e) => {
    if (!isDrawing) return;
    const { x, y } = getPos(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleUp = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const exportPNG = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'design.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const features = [
    {
      icon: Palette,
      title: 'Design Tools',
      description: 'Professional design tools for creating unique fashion pieces',
      color: 'bg-orange-100 text-orange-600',
      delay: 0.1,
      emoji: '🎨'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Work together with designers and AI to create amazing designs',
      color: 'bg-blue-100 text-blue-600',
      delay: 0.2,
      emoji: '👥'
    },
    {
      icon: Sparkles,
      title: 'AI Assistance',
      description: 'AI-powered suggestions and design recommendations',
      color: 'bg-purple-100 text-purple-600',
      delay: 0.3,
      emoji: '✨'
    },
    {
      icon: Zap,
      title: 'Real-time Editing',
      description: 'Edit and modify designs in real-time',
      color: 'bg-yellow-100 text-yellow-600',
      delay: 0.4,
      emoji: '⚡'
    }
  ];

  const stats = [
    { number: '5K+', label: 'Designs Created', icon: Palette },
    { number: '100+', label: 'Designers', icon: Users },
    { number: '4.9★', label: 'User Rating', icon: Star },
    { number: '24/7', label: 'Available', icon: Crown }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
        {/* Floating Design Elements */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            {['🎨', '✨', '🎭', '🎪', '🎯', '🎲', '🎸', '🎹'][i]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.3, 0.1, 0.3],
            x: [0, -30, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center mb-6"
          >
            <motion.div 
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Palette className="w-10 h-10" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Co-Design
          </motion.h1>

          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Collaborate with AI and designers to create unique fashion pieces. Bring your ideas to life.
          </motion.p>

          <motion.button 
            className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Designing
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-orange-600" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-orange-600 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Co-Design Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create amazing fashion designs with our collaborative tools.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  delay: feature.delay
                }}
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {/* Floating Emoji */}
                  <motion.div
                    className="absolute top-4 right-4 text-3xl opacity-20"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: feature.delay
                    }}
                  >
                    {feature.emoji}
                  </motion.div>

                  <motion.div 
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Create Together?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start collaborating and bring your fashion ideas to life.
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tools */}
            <div className="lg:col-span-1 bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Design Tools</h3>
              <label className="block text-sm text-gray-700 mb-2">Color</label>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-10 p-1 rounded-md border" />

              <label className="block text-sm text-gray-700 mt-4 mb-2">Brush Size: {size}px</label>
              <input type="range" min="1" max="20" value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full" />

              <div className="flex gap-3 mt-6">
                <button onClick={clearCanvas} className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg inline-flex items-center justify-center gap-2">
                  <Eraser className="w-4 h-4" /> Clear
                </button>
                <button onClick={exportPNG} className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg inline-flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Export
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="lg:col-span-3">
              <div className="aspect-video bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full touch-none"
                  onMouseDown={handleDown}
                  onMouseMove={handleMove}
                  onMouseUp={handleUp}
                  onMouseLeave={handleUp}
                  onTouchStart={handleDown}
                  onTouchMove={handleMove}
                  onTouchEnd={handleUp}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Tip: Use touch or mouse to draw. Export as PNG.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoDesign;
