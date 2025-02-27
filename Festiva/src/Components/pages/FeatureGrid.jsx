import React from 'react';
import { motion } from 'framer-motion';

const FeatureGrid = () => {
  const features = [
    {
      title: "Brand Design",
      description: "Creating memorable brand identities that tell your story and connect with your audience.",
      size: "large",
      image: "https://images.unsplash.com/photo-1734375181552-cfa83d404033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      delay: 0.2
    },
    {
      title: "Web Design",
      description: "Crafting responsive, modern websites that engage and convert visitors.",
      size: "small",
      image: "https://images.unsplash.com/photo-1731902062648-260a1b5067a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      delay: 0.4
    },
    {
      title: "Print Design",
      description: "Delivering impactful print materials that make a lasting impression.",
      size: "medium",
      image: "https://images.unsplash.com/photo-1729505622656-6da75375c3a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      delay: 0.6
    },
    {
        title: "Print Design",
        description: "Delivering impactful print materials that make a lasting impression.",
        size: "medium",
        image: "https://images.unsplash.com/photo-1592495981488-073153776d9a?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        delay: 0.6
      },
      {
        title: "Print Design",
        description: "Delivering impactful print materials that make a lasting impression.",
        size: "medium",
        image: "https://plus.unsplash.com/premium_vector-1683121968704-a5bcf3bd0244?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        delay: 0.6
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Design Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into visual experiences that captivate and inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden shadow-lg bg-white 
                ${feature.size === 'large' ? 'md:col-span-2' : ''} 
                ${feature.size === 'medium' ? 'md:row-span-2' : ''}`}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureGrid;