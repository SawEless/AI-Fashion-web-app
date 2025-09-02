import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Smartphone, Sparkles, Zap, Star, Crown, TrendingUp, ArrowRight, Video, VideoOff } from 'lucide-react';

const ARTryOn = () => {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState('');

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStreaming(true);
        setError('');
      }
    } catch (e) {
      setError('Camera permission denied or not available.');
    }
  };

  const stopCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach((t) => t.stop());
      video.srcObject = null;
    }
    setStreaming(false);
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  const features = [
    {
      icon: Camera,
      title: 'Real-time Try-On',
      description: 'See how clothes look on you instantly with your camera',
      color: 'bg-blue-100 text-blue-600',
      delay: 0.1,
      emoji: '📷'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Works perfectly on your smartphone or tablet',
      color: 'bg-green-100 text-green-600',
      delay: 0.2,
      emoji: '📱'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'No waiting - see your outfit immediately',
      color: 'bg-yellow-100 text-yellow-600',
      delay: 0.3,
      emoji: '⚡'
    },
    {
      icon: Star,
      title: 'High Accuracy',
      description: 'Advanced AI ensures realistic fitting',
      color: 'bg-purple-100 text-purple-600',
      delay: 0.4,
      emoji: '⭐'
    }
  ];

  const stats = [
    { number: '98%', label: 'Accuracy Rate', icon: Star },
    { number: '50K+', label: 'Items Tried', icon: Camera },
    { number: '2M+', label: 'Users', icon: Crown },
    { number: '4.8★', label: 'Rating', icon: TrendingUp }
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">
        {/* Floating AR Elements */}
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          >
            {['👕', '👗', '👖', '👠', '👜', '👒', '🕶️', '💍', '👔', '🧥'][i]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 overflow-hidden">
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
              <Camera className="w-10 h-10" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            AR Try-On
          </motion.h1>

          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Try clothes virtually with augmented reality. See how they look on you before you buy.
          </motion.p>

          <motion.button 
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trying
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
                    className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-blue-600 mb-2"
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
              How AR Try-On Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of shopping with our advanced AR technology.
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
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
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
            Ready to Try Before You Buy?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of shopping with our AR technology.
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start AR Experience
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Camera Controls */}
            <div className="lg:col-span-1 bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Camera Preview</h3>
              <div className="flex gap-3">
                <button onClick={startCamera} disabled={streaming} className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 inline-flex items-center gap-2">
                  <Video className="w-4 h-4" /> Start
                </button>
                <button onClick={stopCamera} disabled={!streaming} className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 inline-flex items-center gap-2">
                  <VideoOff className="w-4 h-4" /> Stop
                </button>
              </div>
              {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
            </div>

            {/* Live Preview */}
            <div className="lg:col-span-2">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-gray-200">
                <video ref={videoRef} className="w-full h-full object-cover" playsInline muted />
              </div>
              <p className="text-xs text-gray-500 mt-2">Tip: Ensure good lighting and stand centered for best results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ARTryOn;
