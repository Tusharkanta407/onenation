import React from 'react';
import './App.css';
import './index.css';
import Navbar from './componets/navbar';
import Hero from './componets/Hero';
import { Routes, Route } from 'react-router-dom';
import GetCard from './pages/GetCard';
import VerifyCard from './pages/VerifyCard';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          {/* Add more sections here as needed */}
          <div id="designs" className="min-h-screen bg-black flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Designs Section</h2>
          </div>
          <div id="services" className="min-h-screen bg-black flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Services Section</h2>
          </div>
          <div id="about-us" className="min-h-screen bg-black flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">About Us Section</h2>
          </div>
          <div id="contact-us" className="min-h-screen bg-black flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Contact Us Section</h2>
          </div>
        </>} />
        <Route path="/get-card" element={<GetCard />} />
        <Route path="/verify-card" element={<VerifyCard />} />
      </Routes>
    </div>
  );
}

export default App;
