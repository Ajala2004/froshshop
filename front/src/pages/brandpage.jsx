
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './home.css';
import Loader from './loader';
import { FaCar, FaGasPump, FaTachometerAlt, FaFilter } from 'react-icons/fa';

const CarBrandPage = () => {
  const { brand } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [activeModel, setActiveModel] = useState(null);
  const navigate = useNavigate();

  // Sample data with correct image paths
  const brandData = {
    Toyota: [
      { name: "Camry", type: "Sedan", price: "$26,420", image: "camry.jfif" },
      { name: "Corolla", type: "Sedan", price: "$21,050", image: "corolla.jfif" }
    ],
    Honda: [
      { name: "Civic", type: "Sedan", price: "$23,950", image: "civic.jpg" },
      { name: "Accord", type: "Sedan", price: "$27,985", image: "accord.jpg" }
    ]
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, [brand]);

  // Format brand name to match data keys
  const formattedBrand = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
  const currentBrandModels = brandData[formattedBrand] || [];

  if (isLoading) return <Loader />;

  if (currentBrandModels.length === 0) {
    return (
      <div className="not-found">
        <h2>Brand not found: "{brand}"</h2>
        <p>Available brands: {Object.keys(brandData).join(', ')}</p>
      </div>
    );
  }

  const filteredModels = filter === 'All' 
    ? currentBrandModels 
    : currentBrandModels.filter(model => model.type === filter);

  return (
    <div className="car-brand-page">
      {/* Hero Section */}
      <motion.div 
        className="brand-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{formattedBrand}</h1>
        <p>Explore the {formattedBrand} lineup</p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div 
        className="filter-bar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="filter-title">
          <FaFilter />
          <span>Filter by:</span>
        </div>
        {['All', 'Sedan', 'SUV'].map((type) => (
          <motion.button
            key={type}
            className={`filter-btn ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type}
          </motion.button>
        ))}
      </motion.div>

      {/* Models Grid */}
      <div className="models-grid">
        <AnimatePresence>
          {filteredModels.map((model) => (
            <motion.div
              key={model.name}
              className="model-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveModel(model)}
            >
              {/* Fixed image URL syntax */}
              <div 
                className="model-image" 
                style={{ backgroundImage: `url(/public/${model.image}) `}} 
              />
              <div className="model-info">
                <h3>{model.name}</h3>
                <div className="model-specs">
                  <span><FaCar /> {model.type}</span>
                  <span><FaTachometerAlt /> {model.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Model Details Overlay */}
      <AnimatePresence>
        {activeModel && (
          <motion.div 
            className="model-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModel(null)}
>
            <motion.div
              className="overlay-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{activeModel.name}</h2>
              <p>Price: {activeModel.price}</p>
              <p>Type: {activeModel.type}</p>
              <button onClick={() => navigate(`/brands/${brand}/${activeModel.name}`)}>
                View Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarBrandPage;