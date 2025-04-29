
import React, { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { FaCar, FaUsers, FaAward, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

import './about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { value: '15+', label: 'Years Experience', icon: <FaAward /> },
    { value: '10K+', label: 'Happy Clients', icon: <FaUsers /> },
    { value: '50+', label: 'Brands Available', icon: <FaCar /> }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Story</h1>
          <p>Discover the passion behind froshAuto and our commitment to automotive excellence</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tabs Section */}
      <section className="tabs-section">
        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button
            className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
          </button>
          <button
            className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`}
            onClick={() => setActiveTab('values')}
          >
            Core Values
          </button>
        </div>

        <div className="tab-content">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'mission' && (
                <div className="mission-content">
                  <h2>Redefining Automotive Excellence</h2>
                  <p>
                    At FroshAuto, we're committed to providing an unparalleled car buying experience. 
                    Our mission is to connect discerning clients with premium vehicles that exceed expectations, 
                    backed by transparent service and expert guidance.
                  </p>
                  <div className="mission-image"></div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="vision-content">
                  <h2>Shaping the Future of Mobility</h2>
                  <p>
                    We envision a world where car ownership is seamless, sustainable, and exhilarating. 
                    By embracing innovation and maintaining our uncompromising standards, we aim to become 
                    the global benchmark for luxury automotive retail.
                  </p>
                  <div className="vision-image"></div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="values-content">
                  <h2>What Guides Us</h2>
                  <ul>


<li><strong>Integrity:</strong> Honest, transparent dealings in all aspects</li>
                    <li><strong>Passion:</strong> Genuine love for exceptional automobiles</li>
                    <li><strong>Innovation:</strong> Constantly evolving to serve you better</li>
                    <li><strong>Excellence:</strong> Never settling for anything but the best</li>
                  </ul>
                  <div className="values-image"></div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Meet Our Experts
        </motion.h2>
        <div className="team-grid">
          {[
            { name: "Alex Morgan", role: "Founder & CEO", image: "team1.jpg" },
            { name: "Sarah Chen", role: "Sales Director", image: "team2.jpg" },
            { name: "James Wilson", role: "Lead Technician", image: "team3.jpg" }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="member-image"
                style={{ backgroundImage: `url(/images/${member.image})` }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Experience the LuxAuto Difference?</h2>
          <div className="contact-methods">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>123 Premium Drive, Auto Valley</p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+1 (555) LUX-AUTO</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>contact@luxauto.com</p>
            </div>
          </div>
          <button className="cta-button">Schedule Consultation</button>
        </motion.div>
      </section>

      
    </div>
  );
};

export default About;