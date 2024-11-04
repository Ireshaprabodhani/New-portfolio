import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mt-4">
            Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.form
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
        >
          <div className="space-y-6">
            {[
              { type: "text", placeholder: "Your Name" },
              { type: "email", placeholder: "Your Email" }
            ].map((input, index) => (
              <motion.div
                key={input.placeholder}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
              </motion.div>
            ))}
            
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;