
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      region: 'Northern Region',
      address: 'Plot No. 45, Sector 18, Institutional Area, Gurugram, Haryana - 122015',
      phone: '+91-124-4567890',
      email: 'north@onenation.gov.in',
      states: ['Delhi', 'Punjab', 'Haryana', 'Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir']
    },
    {
      region: 'Western Region',
      address: 'Office No. 301, Nariman Point, Mumbai, Maharashtra - 400021',
      phone: '+91-22-6789123',
      email: 'west@onenation.gov.in',
      states: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa', 'Madhya Pradesh']
    },
    {
      region: 'Southern Region',
      address: 'Building A-4, HITEC City, Hyderabad, Telangana - 500081',
      phone: '+91-40-4567123',
      email: 'south@onenation.gov.in',
      states: ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Kerala', 'Puducherry']
    },
    {
      region: 'Eastern Region',
      address: 'Salt Lake City, Sector V, Kolkata, West Bengal - 700091',
      phone: '+91-33-2345678',
      email: 'east@onenation.gov.in',
      states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand', 'Assam', 'Tripura']
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-400 rounded-full opacity-5 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to help you navigate government services. Reach out to us for assistance with applications, 
            queries, or support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <i className="fas fa-envelope text-purple-500 mr-4"></i>
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
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

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="health-card">Health Card</option>
                    <option value="ration-card">Ration Card</option>
                    <option value="pension">Old Age Pension</option>
                    <option value="govt-officer">Govt Officer Card</option>
                    <option value="education">Education Support</option>
                    <option value="labor">Labor Registration</option>
                    <option value="housing">Housing Scheme</option>
                    <option value="women-empowerment">Women Empowerment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your query or requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane mr-3"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8 hover:border-purple-500/40 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-phone text-purple-500 mr-4"></i>
                Quick Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center group cursor-pointer hover:bg-purple-900/20 p-3 rounded-lg transition-all duration-300">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4 group-hover:bg-purple-600/30 transition-all duration-300">
                    <i className="fas fa-envelope text-purple-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">support@onenation.gov.in</p>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer hover:bg-purple-900/20 p-3 rounded-lg transition-all duration-300">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4 group-hover:bg-purple-600/30 transition-all duration-300">
                    <i className="fas fa-phone text-purple-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Toll-Free Helpline</h4>
                    <p className="text-gray-400">1800-123-4567</p>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer hover:bg-purple-900/20 p-3 rounded-lg transition-all duration-300">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4 group-hover:bg-purple-600/30 transition-all duration-300">
                    <i className="fas fa-clock text-purple-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Working Hours</h4>
                    <p className="text-gray-400">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer hover:bg-purple-900/20 p-3 rounded-lg transition-all duration-300">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4 group-hover:bg-purple-600/30 transition-all duration-300">
                    <i className="fas fa-headset text-purple-400"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Emergency Support</h4>
                    <p className="text-gray-400">1800-URGENT-1 (24/7)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-900/20 to-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-500">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-exclamation-triangle text-red-400 mr-3"></i>
                Emergency Assistance
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                For urgent document verification or immediate assistance with government services.
              </p>
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>

        {/* Regional Offices */}
        <div className={`mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Regional Offices
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt mr-3"></i>
                  {office.region}
                </h4>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <i className="fas fa-building text-purple-500 mt-1 mr-3 text-sm"></i>
                    <p className="text-gray-300 text-sm">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <i className="fas fa-phone text-purple-500 mr-3 text-sm"></i>
                    <p className="text-gray-300 text-sm">{office.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-purple-500 mr-3 text-sm"></i>
                    <p className="text-gray-300 text-sm">{office.email}</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-white font-semibold text-sm mb-2">States Covered:</h5>
                  <div className="flex flex-wrap gap-1">
                    {office.states.map((state, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 hover:border-purple-500/40 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white mb-6">
              Find Us Nationwide
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              With offices across all states and union territories, we ensure that government services 
              are accessible to migrant communities wherever they are in India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 flex items-center">
                <i className="fas fa-map mr-2"></i>
                View All Locations
              </button>
              <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center">
                <i className="fas fa-directions mr-2"></i>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;