"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HeroHighlight } from './ui/hero-highlight';
import { Spotlight } from './ui/spotlight';
import { Sparkle, Heart, Utensils, Clock, GraduationCap, Hammer, Home, User, Check, ArrowRight } from 'lucide-react';
import { FaUserTie } from 'react-icons/fa';
const Services = () => {
  const [ setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'Health Card',
      description: 'Access to comprehensive healthcare services across all states',
      features: ['Emergency Medical Care', 'Specialist Consultations', 'Prescription Coverage', 'Health Checkups'],
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-900/20 to-pink-900/20'
    },
    {
      id: 2,
      icon: Utensils,
      title: 'Ration Card',
      description: 'Subsidized food grains and essential commodities',
      features: ['Rice & Wheat Allocation', 'Cooking Oil Subsidy', 'Sugar & Pulses', 'Kerosene (where applicable)'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-900/20 to-emerald-900/20'
    },
    {
      id: 3,
      icon: Clock,
      title: 'Old Age Pension',
      description: 'Financial support for senior citizens',
      features: ['Monthly Pension', 'Medical Allowance', 'Festival Bonus', 'Death Benefit'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      id: 4,
      icon:  FaUserTie,
      title: 'State Govt Officer Card',
      description: 'Official identification for government employees',
      features: ['Employee Verification', 'Department Access', 'Salary Benefits', 'Official Recognition'],
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-900/20 to-violet-900/20'
    },
    {
      id: 5,
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Scholarship and educational assistance programs',
      features: ['Student Scholarships', 'Book Allowance', 'Exam Fee Waiver', 'Educational Loans'],
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-900/20 to-amber-900/20'
    },
    {
      id: 6,
      icon: Hammer,
      title: 'Labor Registration',
      description: 'Registration for construction and other labor workers',
      features: ['Work Verification', 'Safety Insurance', 'Skill Certification', 'Job Portal Access'],
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-900/20 to-cyan-900/20'
    },
    {
      id: 7,
      icon: Home,
      title: 'Housing Scheme',
      description: 'Affordable housing solutions for migrants',
      features: ['Home Loan Subsidy', 'Construction Grant', 'Plot Allocation', 'Rental Assistance'],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-900/20 to-purple-900/20'
    },
    {
      id: 8,
      icon: User,
      title: 'Women Empowerment',
      description: 'Special schemes for women migrants',
      features: ['Skill Development', 'Self-Help Groups', 'Maternity Benefits', 'Safety Programs'],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-900/20 to-rose-900/20'
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-black relative overflow-hidden py-20">
      <HeroHighlight className="h-full w-full bg-black bg-dot-white/[0.2] relative">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium bg-gray-600/30 border z-50 space-x-3">
                <Sparkle className='text-purple-500'/>
                <div>Our Services</div>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive government services tailored for migrant communities across India. 
              We ensure seamless access to all your entitled benefits.
            </motion.p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <motion.h3 
              className="text-3xl font-bold text-center text-white mb-12"
              whileHover={{ scale: 1.02 }}
            >
              How It Works
            </motion.h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Apply Online', icon: 'laptop', desc: 'Submit your application through our secure portal' },
                { step: '02', title: 'Document Verification', icon: 'search', desc: 'Our team verifies all submitted documents' },
                { step: '03', title: 'Processing', icon: 'cogs', desc: 'Application processed by government officials' },
                { step: '04', title: 'Card Delivery', icon: 'truck', desc: 'Receive your card at your registered address' }
              ].map((process, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="text-purple-400 font-bold text-lg mb-2">{process.step}</div>
                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/30 transition-all duration-300">
                      <Sparkle className="w-6 h-6 text-purple-500 group-hover:animate-bounce" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{process.title}</h4>
                    <p className="text-gray-400 text-sm">{process.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <div className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 h-full hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden`}>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <service.icon className="w-10 h-10 text-purple-500 group-hover:animate-pulse" />
                        <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:animate-ping"></div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {service.title}
                      </h4>
                      
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features - Show on hover */}
                      <motion.div 
                        className="overflow-hidden"
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ 
                          maxHeight: hoveredCard === service.id ? 160 : 0, 
                          opacity: hoveredCard === service.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-purple-500/20 pt-3">
                          <h5 className="text-purple-400 font-semibold text-sm mb-2">Key Features:</h5>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-400 text-xs flex items-center">
                                <Check className="w-3 h-3 text-purple-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      {/* Apply Button */}
                      <div className="mt-4">
                        <motion.button 
                          className={`w-full bg-gradient-to-r ${service.color} text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 opacity-80 group-hover:opacity-100 flex items-center justify-center`}
                          whileHover={{ scale: 1.05 }}
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-20"
          >
            <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 hover:border-purple-500/50 transition-all duration-500">
              <motion.h3 
                className="text-3xl font-bold text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Ready to Access Your Benefits?
              </motion.h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of migrants who have successfully obtained their government cards and benefits through One Nation.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 flex items-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkle className="w-5 h-5 mr-2" />
                Start Your Application
              </motion.button>
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default Services;