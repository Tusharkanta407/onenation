
import React from 'react';

const Footer = () => {
  const governmentLinks = [
    { name: 'Ministry of Home Affairs', url: '#', icon: 'fas fa-home' },
    { name: 'Ministry of Labour & Employment', url: '#', icon: 'fas fa-briefcase' },
    { name: 'Ministry of Health & Family Welfare', url: '#', icon: 'fas fa-heartbeat' },
    { name: 'Ministry of Rural Development', url: '#', icon: 'fas fa-tree' },
    { name: 'Ministry of Social Justice', url: '#', icon: 'fas fa-balance-scale' },
    { name: 'Ministry of Women & Child Development', url: '#', icon: 'fas fa-child' },
    { name: 'National Portal of India', url: '#', icon: 'fas fa-flag' },
    { name: 'Digital India', url: '#', icon: 'fas fa-digital-tachograph' },
    { name: 'MyGov Portal', url: '#', icon: 'fas fa-users' },
    { name: 'Aadhaar Portal', url: '#', icon: 'fas fa-id-card' },
    { name: 'DigiLocker', url: '#', icon: 'fas fa-cloud' },
    { name: 'UMANG App', url: '#', icon: 'fas fa-mobile-alt' }
  ];

  const quickLinks = [
    { name: 'About One Nation', url: '#about', icon: 'fas fa-info-circle' },
    { name: 'Our Services', url: '#services', icon: 'fas fa-cogs' },
    { name: 'Apply Online', url: '#apply', icon: 'fas fa-file-alt' },
    { name: 'Track Application', url: '#track', icon: 'fas fa-search' },
    { name: 'Download Forms', url: '#forms', icon: 'fas fa-download' },
    { name: 'FAQ', url: '#faq', icon: 'fas fa-question-circle' },
    { name: 'Contact Us', url: '#contact', icon: 'fas fa-phone' },
    { name: 'Grievance Portal', url: '#grievance', icon: 'fas fa-exclamation-triangle' }
  ];

  const statePortals = [
    { name: 'Andhra Pradesh', url: '#' },
    { name: 'Karnataka', url: '#' },
    { name: 'Maharashtra', url: '#' },
    { name: 'Gujarat', url: '#' },
    { name: 'Tamil Nadu', url: '#' },
    { name: 'Kerala', url: '#' },
    { name: 'West Bengal', url: '#' },
    { name: 'Delhi', url: '#' },
    { name: 'Punjab', url: '#' },
    { name: 'Haryana', url: '#' },
    { name: 'Rajasthan', url: '#' },
    { name: 'Uttar Pradesh', url: '#' }
  ];

  const importantNotices = [
    'New Health Card Application Process - Updated Guidelines',
    'Ration Card Verification Drive - State-wise Schedule',
    'Digital Document Submission Now Available',
    'Emergency Contact Numbers for Migrant Workers'
  ];

  return (
    <footer className="bg-black border-t border-purple-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* One Nation Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  ONE NATION
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mb-6 rounded-full"></div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Empowering migrant communities across India with seamless access to government services. 
                  We bridge the gap between citizens and their rightful benefits.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: 'fab fa-linkedin-in', url: '#', color: 'hover:text-blue-500' },
                    { icon: 'fab fa-twitter', url: '#', color: 'hover:text-blue-400' },
                    { icon: 'fab fa-instagram', url: '#', color: 'hover:text-pink-500' },
                    { icon: 'fab fa-facebook-f', url: '#', color: 'hover:text-blue-600' },
                    { icon: 'fab fa-youtube', url: '#', color: 'hover:text-red-500' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`bg-gray-800/50 p-3 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-purple-500/20 hover:border-purple-500/50`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-link text-purple-500 mr-3"></i>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <i className={`${link.icon} mr-3 text-purple-500/70 group-hover:text-purple-400 transition-colors duration-300`}></i>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Government Portals */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-university text-purple-500 mr-3"></i>
                Government Portals
              </h4>
              <ul className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
                {governmentLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group text-sm"
                    >
                      <i className={`${link.icon} mr-3 text-purple-500/70 group-hover:text-purple-400 transition-colors duration-300 text-xs`}></i>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* State Portals & Contact */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-map-marked-alt text-purple-500 mr-3"></i>
                State Portals
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {statePortals.map((state, index) => (
                  <a
                    key={index}
                    href={state.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm hover:bg-purple-900/20 px-2 py-1 rounded group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {state.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-purple-500/20 rounded-xl p-4">
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <i className="fas fa-headset text-purple-500 mr-2"></i>
                  24/7 Support
                </h5>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300 flex items-center">
                    <i className="fas fa-phone text-purple-500 mr-2"></i>
                    1800-123-4567
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <i className="fas fa-envelope text-purple-500 mr-2"></i>
                    support@onenation.gov.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notices */}
        <div className="border-t border-purple-500/20 py-8">
          <h4 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center">
            <i className="fas fa-bullhorn text-purple-500 mr-3"></i>
            Important Notices
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {importantNotices.map((notice, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-lg p-4 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start">
                  <i className="fas fa-bell text-yellow-500 mr-3 mt-1 group-hover:animate-pulse"></i>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {notice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website Policies */}
        <div className="border-t border-purple-500/20 py-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy',
              'Accessibility Statement',
              'RTI Guidelines',
              'Grievance Redressal',
              'Website Policies',
              'Hyperlinking Policy'
            ].map((policy, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm border-b border-transparent hover:border-purple-500/50"
              >
                {policy}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 One Nation - Government of India. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs text-center md:text-left mt-1">
                Last updated: December 2024 | Version 2.1.0
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm flex items-center">
                <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                SSL Secured
              </div>
              <div className="text-gray-400 text-sm flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                Government Verified
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-110 group"
          >
            <i className="fas fa-arrow-up group-hover:animate-bounce"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;