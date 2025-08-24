"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HeroHighlight } from '../componets/ui/hero-highlight';
import { Spotlight } from '../componets/ui/spotlight';
import { Sparkle, ArrowLeft, CreditCard, User, FileText, CheckCircle } from 'lucide-react';

const GetCard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    service: '',
    documents: []
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const services = [
    { id: 'health', name: 'Health Card', icon: '🏥', color: 'from-red-500 to-pink-600' },
    { id: 'ration', name: 'Ration Card', icon: '🍚', color: 'from-green-500 to-emerald-600' },
    { id: 'pension', name: 'Old Age Pension', icon: '👴', color: 'from-blue-500 to-cyan-600' },
    { id: 'govt-officer', name: 'Govt Officer Card', icon: '👔', color: 'from-purple-500 to-violet-600' },
    { id: 'education', name: 'Education Support', icon: '🎓', color: 'from-orange-500 to-amber-600' },
    { id: 'labor', name: 'Labor Registration', icon: '🔨', color: 'from-teal-500 to-cyan-600' },
    { id: 'housing', name: 'Housing Scheme', icon: '🏠', color: 'from-indigo-500 to-purple-600' },
    { id: 'women', name: 'Women Empowerment', icon: '👩', color: 'from-pink-500 to-rose-600' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <HeroHighlight className="h-full w-full bg-black bg-dot-white/[0.2] relative">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="container mx-auto px-6 relative z-10 pt-32">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors duration-300">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium bg-gray-600/30 border z-50 space-x-3">
                <Sparkle className='text-purple-500'/>
                <div>Get Your Card</div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent"
            >
              Get Your OneNation Card
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Apply for government services and benefits with our streamlined process. 
              Get verified cards for healthcare, ration, pension, and more.
            </motion.p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex justify-center items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    step <= currentStep 
                      ? 'bg-purple-600 border-purple-500 text-white' 
                      : 'bg-gray-800 border-gray-600 text-gray-400'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 transition-all duration-300 ${
                      step < currentStep ? 'bg-purple-500' : 'bg-gray-600'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-400">
                Step {currentStep} of 3: {currentStep === 1 ? 'Select Service' : currentStep === 2 ? 'Fill Details' : 'Submit Documents'}
              </p>
            </div>
          </motion.div>

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">Choose Your Service</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setFormData({ ...formData, service: service.id });
                      setCurrentStep(2);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <div className={`bg-gradient-to-br ${service.color} bg-opacity-10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 h-full`}>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 text-sm">Apply for {service.name.toLowerCase()} benefits</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Form */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <User className="text-purple-500 mr-4" />
                  Personal Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Current State</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        required
                      >
                        <option value="">Select your state</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="delhi">Delhi</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-green-900/20 to-purple-900/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-12 hover:border-green-500/40 transition-all duration-500">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Your application has been successfully submitted. We'll process it and get back to you within 24-48 hours.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-gray-400 text-sm">Application ID</p>
                    <p className="text-white font-mono">ON-{Date.now().toString().slice(-8)}</p>
                  </div>
                  <Link to="/" className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105">
                    Back to Home
                  </Link>
      </div>
              </div>
            </motion.div>
          )}
        </div>
      </HeroHighlight>
    </div>
  );
};

export default GetCard;


