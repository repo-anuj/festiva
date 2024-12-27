import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Star, Verified } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      clientName: "Sarah Johnson",
      company: "Tech Innovators Inc",
      avatar: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
      image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/attachment_59337693.jpg?auto=format&q=60&fit=max&w=930",
      testimonial: "Working with this design team was incredible! They transformed our brand identity and delivered beyond our expectations. The attention to detail was outstanding.",
      rating: 5,
      likes: "2.4k",
      comments: "284",
      projectType: "Brand Redesign",
      delay: 0.2
    },
    {
      clientName: "Michael Chen",
      company: "Startup Hub",
      avatar: "https://www.shutterstock.com/image-photo/studio-portrait-happy-woman-long-260nw-1954427407.jpg",
      image: "https://theinterviewportal.com/wp-content/uploads/2017/10/32b535e5a569e638e1182a3cc14ee9af-illustration-vector-graphic-design-illustration.jpg",
      testimonial: "#Festiva Their creative process is unmatched. They didn't just design our website, they created an experience that our users love. Couldn't be happier with the results!",
      rating: 5,
      likes: "3.1k",
      comments: "326",
      projectType: "Website Design",
      delay: 0.4
    },
    {
      clientName: "Emma Davis",
      company: "Fashion Forward",
      avatar: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
      image: "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg",
      testimonial: "The #Festiva perfectly captured our vision for the brand. The designs are modern, fresh, and exactly what we needed. Their communication was excellent throughout.",
      rating: 5,
      likes: "1.8k",
      comments: "195",
      projectType: "Brand Identity",
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

  const cardVariants = {
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
    <section className="bg-white py-20 px-4 md:px-8">
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
            Client Love
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See what our clients say about their experience working with us
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.clientName}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.clientName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-sm">{testimonial.clientName}</p>
                      <Verified className="w-4 h-4 text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="text-gray-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 inline text-yellow-400" fill="#FBBF24" />
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="aspect-square relative">
                <img 
                  src={testimonial.image}
                  alt={`Project for ${testimonial.company}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                  <p className="text-sm font-medium">{testimonial.projectType}</p>
                </div>
              </div>

              {/* Engagement */}
              <div className="p-4 flex items-center gap-4 border-b border-gray-100">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2"
                >
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm">{testimonial.likes}</span>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                  <span className="text-sm">{testimonial.comments}</span>
                </motion.button>
              </div>

              {/* Testimonial */}
              <div className="p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.testimonial}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;