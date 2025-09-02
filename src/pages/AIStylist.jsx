import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageCircle, Sparkles, Zap, Star, Crown, TrendingUp, ArrowRight } from 'lucide-react';
import AIChatInterface from '../components/AIChatInterface';

const AIStylist = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Intelligence',
      description: 'Advanced machine learning algorithms understand your style preferences',
      color: 'bg-purple-100 text-purple-600',
      delay: 0.1,
      emoji: '🧠'
    },
    {
      icon: MessageCircle,
      title: 'Natural Conversation',
      description: 'Chat naturally with your AI stylist in real-time',
      color: 'bg-blue-100 text-blue-600',
      delay: 0.2,
      emoji: '💬'
    },
    {
      icon: Sparkles,
      title: 'Style Recommendations',
      description: 'Get personalized outfit suggestions based on your taste',
      color: 'bg-pink-100 text-pink-600',
      delay: 0.3,
      emoji: '✨'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Receive style advice and recommendations instantly',
      color: 'bg-yellow-100 text-yellow-600',
      delay: 0.4,
      emoji: '⚡'
    }
  ];

  const stats = [
    { number: '95%', label: 'Style Accuracy', icon: Star },
    { number: '10K+', label: 'Outfits Generated', icon: Sparkles },
    { number: '24/7', label: 'Available', icon: Zap },
    { number: '4.9★', label: 'User Rating', icon: Crown }
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        {/* Floating Fashion Items */}
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
            {['👗', '👠', '👜', '💍', '👒', '🕶️', '👔', '🧥'][i]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20 overflow-hidden">
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
              <Brain className="w-10 h-10" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            AI Stylist
          </motion.h1>

          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Get personalized fashion advice from our AI-powered stylist. Discover your perfect style with intelligent recommendations.
          </motion.p>

          <motion.button 
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Chatting
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
                    className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-purple-600 mb-2"
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
              Why Choose AI Stylist?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of fashion with our intelligent styling assistant.
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

      {/* Chat Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Chat with your AI Stylist</h2>
            <p className="text-gray-600 mt-2">Get instant outfit ideas, styling tips, and recommendations.</p>
          </motion.div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
            <AIChatInterface />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white relative overflow-hidden">
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
            Ready to Transform Your Style?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start chatting with your AI stylist and discover your perfect look.
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AIStylist;
