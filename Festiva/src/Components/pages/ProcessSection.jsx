import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, MessageCircle, Lightbulb, PenTool, Zap, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const processes = [
    {
      icon: MessageCircle,
      title: "Discovery",
      description: "We start by understanding your brand, goals, and vision through in-depth consultation.",
      delay: 0.2
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Our team brainstorms creative solutions and develops initial design concepts.",
      delay: 0.4
    },
    {
      icon: Palette,
      title: "Design Creation",
      description: "We craft pixel-perfect designs while keeping your brand identity at the forefront.",
      delay: 0.6
    },
    {
      icon: PenTool,
      title: "Refinement",
      description: "Your feedback helps us perfect every detail until we achieve the ideal design.",
      delay: 0.8
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "We deliver your finalized designs in all the formats you need.",
      delay: 1.0
    },
    {
      icon: CheckCircle,
      title: "Support",
      description: "Our relationship continues with ongoing support and maintenance.",
      delay: 1.2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Design Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A proven methodology that delivers exceptional results every time
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              variants={itemVariants}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <process.icon className="w-6 h-6 text-blue-600" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 mx-3" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {process.title}
              </h3>
              <p className="text-gray-600">
                {process.description}
              </p>
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Your Project
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;