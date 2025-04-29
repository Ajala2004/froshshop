
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCar, FaShieldAlt, FaCogs, FaHeadset } from 'react-icons/fa';
import Loader from './loader';

import './landingpage.css';

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const featuredCars = [
    { name: "Tesla Model S", price: "$79,990", image: "blue.jpg" },
    { name: "BMW i8", price: "$147,500", image: "black.jpg" },
    { name: "Porsche 911", price: "$101,200", image: "yellow.jpg" }
  ];

  if (isLoading) return <Loader />;

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Redefining Automotive Excellence</h1>
          <p>Discover premium vehicles with unmatched performance and luxury</p>
          <Link to="/brands" className="cta-button">
            Explore Brands <FaArrowRight />
          </Link>
        </motion.div>
        <div className="hero-image"></div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="features-grid">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FaShieldAlt className="feature-icon" />
            <h3>Premium Warranty</h3>
            <p>5-year comprehensive coverage on all vehicles</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FaCogs className="feature-icon" />
            <h3>Custom Builds</h3>
            <p>Configure your dream car exactly how you want it</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FaHeadset className="feature-icon" />
            <h3>24/7 Support</h3>
            <p>Dedicated concierge service for all clients</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="cars-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Masterpieces
        </motion.h2>
        <div className="cars-grid">
          {featuredCars.map((car, index) => (
            <motion.div
              key={index}
              className="car-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div 
                className="car-image" 
                style={{ backgroundImage: `url(/public/${car.image})` }}
              />
              <div className="car-info">
                <h3>{car.name}</h3>
                <p>{car.price}</p>
                <Link to="/brands" className="view-button">
                  View Details <FaArrowRight />
                </Link>
</div>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Landing;