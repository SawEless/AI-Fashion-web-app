import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            {['👗', '👕', '👖', '👠', '👜', '👒'][i]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                AI Fashion
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6 max-w-md"
              variants={itemVariants}
            >
              Experience the future of fashion with AI-powered styling, virtual try-ons, and personalized recommendations.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {[
                { icon: Mail, label: 'Email', value: 'hello@aifashion.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Address', value: '123 Fashion St, NY' }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{contact.value}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              variants={itemVariants}
            >
              {[
                { path: '/ai-stylist', name: 'AI Stylist' },
                { path: '/ar-try-on', name: 'AR Try-On' },
                { path: '/avatar-studio', name: 'Avatar Studio' },
                { path: '/co-design', name: 'Co-Design' },
                { path: '/visual-search', name: 'Visual Search' },
                { path: '/vr-showroom', name: 'VR Showroom' }
              ].map((link, index) => (
                <motion.li 
                  key={link.path}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Company
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              variants={itemVariants}
            >
              {[
                { name: 'About Us', href: '#' },
                { name: 'Careers', href: '#' },
                { name: 'Press', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Contact', href: '#' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            © 2024 AI Fashion. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            variants={itemVariants}
          >
            {[
              { name: 'Privacy Policy', href: '#' },
              { name: 'Terms of Service', href: '#' },
              { name: 'Cookie Policy', href: '#' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
