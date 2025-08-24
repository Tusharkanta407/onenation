"use client";
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { HeroHighlight } from './ui/hero-highlight';
import { Spotlight } from './ui/spotlight';
import { Sparkle, Heart, Shield, Users, CreditCard, MapPin, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Component mounted effect
  }, []);

  return (
    <section id="about-us" className="min-h-screen bg-black relative overflow-hidden py-20">
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
                <div>About One Nation</div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent"
            >
              ONE NATION
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-purple-300 font-light tracking-wide"
            >
              United We Serve, Together We Thrive
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <motion.h2 
                  className="text-4xl font-bold text-white mb-6 flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Heart className="text-purple-500 mr-4 animate-pulse" />
                  Our Mission
                </motion.h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We are <span className="text-purple-400 font-semibold">One Nation</span>, a government-aligned initiative dedicated to bridging the gap between migrant communities and essential government services. Our mission is to ensure that every citizen, regardless of their origin state, receives the benefits and support they deserve.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Through our comprehensive verification system and streamlined processes, we make government services accessible to all migrant workers and their families across India.
                </p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <motion.h2 
                  className="text-4xl font-bold text-white mb-6 flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Shield className="text-purple-500 mr-4 animate-pulse" />
                  Our Promise
                </motion.h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We guarantee <span className="text-purple-400 font-semibold">100% authentic verification</span> of all documents and applications. Our dedicated team of government-certified officers ensures that every card issued meets official standards and provides legitimate access to government benefits.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Your trust is our foundation. We maintain complete transparency in our processes and provide real-time updates on your application status.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { icon: Users, number: '50,000+', label: 'Migrants Served', color: 'text-purple-400' },
              { icon: CreditCard, number: '75,000+', label: 'Cards Issued', color: 'text-purple-500' },
              { icon: MapPin, number: '28', label: 'States Covered', color: 'text-purple-600' },
              { icon: Clock, number: '24/7', label: 'Support Available', color: 'text-purple-700' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                  <stat.icon className={`w-12 h-12 ${stat.color} mb-4 mx-auto group-hover:animate-bounce`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center text-white mb-12"
              whileHover={{ scale: 1.02 }}
            >
              Why Choose <span className="text-purple-400">One Nation</span>?
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Government Verified',
                  description: 'All our processes are officially recognized and government-approved'
                },
                {
                  icon: Sparkle,
                  title: 'Fast Processing',
                  description: 'Quick turnaround times with real-time application tracking'
                },
                {
                  icon: Heart,
                  title: 'Complete Support',
                  description: 'End-to-end assistance from application to card delivery'
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  <div className="bg-gray-900/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <value.icon className="w-16 h-16 text-purple-500 mb-6 mx-auto group-hover:animate-pulse" />
                    <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default About;