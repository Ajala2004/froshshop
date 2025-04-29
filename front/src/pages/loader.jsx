import React from 'react';
import { motion } from 'framer-motion';
import './loader.css';
import { FaCar, FaGasPump, FaTachometerAlt, FaCogs, FaUsers, FaFilter } from 'react-icons/fa';
const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.div 
          className="loader-inner"
          animate={{
            rotate: -360,
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <FaCar className="car-icon" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;