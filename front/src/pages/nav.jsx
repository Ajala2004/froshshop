
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './nav.css';
import { FaCar, FaSearch, FaUser, FaChevronDown } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import Loader from './loader';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const carBrands = ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Tesla"];

  const handleBrandSelect = (brand) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/brands/${brand}`);
      setIsLoading(false);
      setIsMenuOpen(false);
    }, 800);
  };

  return (
    <>
      {isLoading && <Loader />}

      <nav className="navbar">
        {/* Left: Logo */}
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCar className="logo-icon" />
          <span className="logo-text">FROSHAUTO</span>
        </motion.div>

        {/* Center: Navigation */}
        <div className="nav-links">
          <motion.div
            className="nav-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">Home</Link>
          </motion.div>

          <motion.div
            className="nav-item brands-dropdown"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Brands <FaChevronDown className="dropdown-icon" /></span>

            <motion.div
              className="dropdown-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {carBrands.map((brand) => (
                <motion.div
                  key={brand}
                  className="dropdown-item"
                  whileHover={{ x: 5 }}
                  onClick={() => handleBrandSelect(brand)}
                >
                  {brand}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="nav-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">About</Link>
          </motion.div>
        </div>

        {/* Right: Search/User */}
        <div className="nav-actions">
          <motion.div
            className="search-container"
            whileHover={{ scale: 1.05 }}
          >
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </motion.div>

          <motion.button
            className="user-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={"/login"}>
            <FaUser />
            </Link>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {carBrands.map((brand) => (
                <motion.div
                  key={brand}
                  className="mobile-item"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBrandSelect(brand)}
                >
                  {brand}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;