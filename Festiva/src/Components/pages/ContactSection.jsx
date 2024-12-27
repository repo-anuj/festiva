import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full min-h-screen py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {/* Contact Form Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Let's Create Something Amazing</h2>
          <form className="space-y-6">
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="your@email.com"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Tell us about your project"
                />
              </motion.div>
            </div>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-200"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Address Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <MapPin className="w-6 h-6 mt-1 text-blue-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-300">
                    123 Design Studio Street<br />
                    Creative District<br />
                    New York, NY 10001
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <Phone className="w-6 h-6 mt-1 text-blue-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <Mail className="w-6 h-6 mt-1 text-blue-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-300">hello@designstudio.com</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <p className="text-sm text-gray-400">
              Let's bring your vision to life. Our team of creative professionals is ready to help you create something extraordinary.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;