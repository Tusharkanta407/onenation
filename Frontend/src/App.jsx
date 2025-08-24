import React from 'react';
import './App.css';
import './index.css';
import Navbar from './componets/navbar';
import Hero from './componets/Hero';
import About from './componets/About';
import Services from './componets/Service';
import Contact from './componets/Contact';
import Footer from './componets/footer';
import { Routes, Route } from 'react-router-dom';
import GetCard from './pages/GetCard';
import VerifyCard from './pages/VerifyCard';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="relative">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 rounded-full opacity-5 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-20 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-400 rounded-full opacity-5 blur-3xl animate-pulse delay-2000"></div>
            </div>
            
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="/get-card" element={<GetCard />} />
        <Route path="/verify-card" element={<VerifyCard />} />
      </Routes>
    </div>
  );
}

export default App;
