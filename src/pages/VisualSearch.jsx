import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Camera, Sparkles, Zap, Star, Crown, TrendingUp, ArrowRight, Upload, Image as ImageIcon } from 'lucide-react';

const VisualSearch = () => {
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const handleSearch = async () => {
    if (!preview) return;
    setLoading(true);
    // Simulate search
    setTimeout(() => {
      setResults([
        { id: 1, title: 'Silk Dress', price: '$129', img: 'https://images.unsplash.com/photo-1520975922139-6c7094844362?w=600&q=80' },
        { id: 2, title: 'Casual Tee', price: '$29', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80' },
        { id: 3, title: 'Denim Jacket', price: '$89', img: 'https://images.unsplash.com/photo-1520975693412-35ee4c1a4a6b?w=600&q=80' },
        { id: 4, title: 'Classic Heels', price: '$79', img: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?w=600&q=80' },
        { id: 5, title: 'Leather Bag', price: '$159', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80' },
        { id: 6, title: 'Sunglasses', price: '$49', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80' },
      ]);
      setLoading(false);
    }, 1200);
  };

  const features = [
    {
      icon: Search,
      title: 'Image Search',
      description: 'Search for similar styles using photos',
      color: 'bg-indigo-100 text-indigo-600',
      delay: 0.1,
      emoji: '🔍'
    },
    {
      icon: Camera,
      title: 'Photo Upload',
      description: 'Upload photos to find matching items',
      color: 'bg-blue-100 text-blue-600',
      delay: 0.2,
      emoji: '📷'
    },
    {
      icon: Sparkles,
      title: 'AI Recognition',
      description: 'Advanced AI identifies styles and patterns',
      color: 'bg-purple-100 text-purple-600',
      delay: 0.3,
      emoji: '✨'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get results in seconds',
      color: 'bg-yellow-100 text-yellow-600',
      delay: 0.4,
      emoji: '⚡'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Images Searched', icon: Search },
    { number: '99%', label: 'Accuracy', icon: Star },
    { number: '4.9★', label: 'User Rating', icon: Crown },
    { number: '24/7', label: 'Available', icon: TrendingUp }
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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">
        {/* Floating Search Elements */}
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
            {['🔍', '📷', '👗', '👕', '👖', '👠', '👜', '👒'][i]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
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
              <Search className="w-10 h-10" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Visual Search
          </motion.h1>

          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Find similar styles and products using AI-powered image recognition.
          </motion.p>

          <motion.button 
            className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Searching
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
                    className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-indigo-600 mb-2"
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
              Visual Search Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our AI-powered visual search works.
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
      <section className="py-20 bg-indigo-600 text-white relative overflow-hidden">
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
            Ready to Find Your Style?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start searching with images and discover amazing fashion.
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Card */}
            <motion.div
              className="lg:col-span-1 bg-gray-50 border border-gray-200 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload an image</h3>
              <label className="block border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-indigo-400 transition-colors">
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <div className="flex flex-col items-center">
                  <Upload className="w-8 h-8 text-indigo-500 mb-2" />
                  <span className="text-gray-600">Click to upload or drag and drop</span>
                  <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</span>
                </div>
              </label>

              {preview && (
                <div className="mt-4">
                  <img src={preview} alt="preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
              )}

              <button
                onClick={handleSearch}
                disabled={!preview || loading}
                className="w-full mt-4 px-4 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
              >
                {loading ? 'Searching...' : 'Search Similar Styles'}
              </button>
            </motion.div>

            {/* Results Grid */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Results</h3>
              {results.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center text-gray-500 bg-gray-50 border border-dashed border-gray-200 rounded-xl">
                  <ImageIcon className="w-8 h-8 mb-2" />
                  <p>No results yet. Upload an image to begin.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {results.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-36 object-cover" />
                      <div className="p-3">
                        <div className="text-sm font-medium text-gray-800">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.price}</div>
                        <button className="mt-2 w-full text-xs px-3 py-2 bg-indigo-600 text-white rounded-md">View</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualSearch;
