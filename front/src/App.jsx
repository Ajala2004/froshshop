import { useEffect, useState } from 'react'
import './App.css'
import Footer from './component/footer'
import Nav from './pages/nav'
import LandingPage from './pages/landingpage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import AdminLogin from './pages/login'
import CarBrandPage from './pages/brandpage'
import "react-toastify"
import { ToastContainer } from 'react-toastify'
import { Toast } from 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'


function App() {


  return (
    <>

      <div className="body">

        <BrowserRouter>
          <Nav />
          <ToastContainer />

          <Routes>
          <Route path="/" element={<LandingPage />} />
            
            <Route path="/:brands/:brand" element={<CarBrandPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<AdminLogin />} />
          </Routes>
          <Footer />

        </BrowserRouter>
      </div>


    </>
  )
}

export default App
