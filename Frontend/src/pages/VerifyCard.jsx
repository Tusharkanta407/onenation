"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HeroHighlight } from '../componets/ui/hero-highlight';
import { Spotlight } from '../componets/ui/spotlight';
import { Sparkle, ArrowLeft, CreditCard, Search, CheckCircle, XCircle, Shield, Clock } from 'lucide-react';

const VerifyCard = () => {
  const [verificationMethod, setVerificationMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      const isValid = Math.random() > 0.3; // 70% success rate for demo
      setVerificationResult({
        valid: isValid,
        cardType: 'Health Card',
        holderName: 'John Doe',
        issueDate: '2024-01-15',
        expiryDate: '2029-01-15',
        status: isValid ? 'Active' : 'Expired',
        benefits: isValid ? ['Medical Care', 'Prescription Coverage', 'Health Checkups'] : []
      });
      setIsVerifying(false);
    }, 2000);
  };

  const verificationMethods = [
    { id: 'card-number', name: 'Card Number', icon: CreditCard, description: 'Enter your OneNation card number' },
    { id: 'qr-code', name: 'QR Code', icon: Search, description: 'Scan the QR code on your card' },
    { id: 'document', name: 'Document Upload', icon: Shield, description: 'Upload your card image for verification' }
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
                <div>Verify Your Card</div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent"
            >
              Verify Your OneNation Card
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-8 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Verify the authenticity and status of your OneNation card. 
              Check your benefits, expiry date, and card validity instantly.
            </motion.p>
          </motion.div>

          {/* Verification Methods */}
          {!verificationMethod && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">Choose Verification Method</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {verificationMethods.map((method, index) => (
                  <motion.div
                    key={method.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group cursor-pointer"
                    onClick={() => setVerificationMethod(method.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 h-full text-center">
                      <method.icon className="w-16 h-16 text-purple-500 mb-6 mx-auto group-hover:animate-pulse" />
                      <h3 className="text-xl font-bold text-white mb-4">{method.name}</h3>
                      <p className="text-gray-400">{method.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Card Number Verification Form */}
          {verificationMethod === 'card-number' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white flex items-center">
                    <CreditCard className="text-purple-500 mr-4" />
                    Card Verification
                  </h2>
                  <button
                    onClick={() => setVerificationMethod('')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleVerification} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 font-mono"
                      placeholder="Enter your OneNation card number"
                      required
                    />
                    <p className="text-gray-500 text-sm mt-2">Format: ON-XXXX-XXXX-XXXX</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isVerifying ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Verify Card
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* Verification Result */}
          {verificationResult && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className={`bg-gradient-to-br ${verificationResult.valid ? 'from-green-900/20 to-purple-900/30' : 'from-red-900/20 to-purple-900/30'} backdrop-blur-sm border ${verificationResult.valid ? 'border-green-500/20' : 'border-red-500/20'} rounded-2xl p-8 hover:border-opacity-40 transition-all duration-500`}>
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 ${verificationResult.valid ? 'bg-green-600' : 'bg-red-600'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {verificationResult.valid ? (
                      <CheckCircle className="w-12 h-12 text-white" />
                    ) : (
                      <XCircle className="w-12 h-12 text-white" />
                    )}
                  </div>
                  <h2 className={`text-3xl font-bold ${verificationResult.valid ? 'text-green-400' : 'text-red-400'} mb-2`}>
                    {verificationResult.valid ? 'Card Verified!' : 'Card Invalid'}
                  </h2>
                  <p className="text-gray-300">
                    {verificationResult.valid ? 'Your OneNation card is valid and active.' : 'This card is not valid or has expired.'}
                  </p>
                </div>

                {verificationResult.valid && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Card Type</p>
                        <p className="text-white font-semibold">{verificationResult.cardType}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Status</p>
                        <p className="text-green-400 font-semibold">{verificationResult.status}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Issue Date</p>
                        <p className="text-white font-semibold">{verificationResult.issueDate}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Expiry Date</p>
                        <p className="text-white font-semibold">{verificationResult.expiryDate}</p>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">Available Benefits</p>
                      <div className="flex flex-wrap gap-2">
                        {verificationResult.benefits.map((benefit, index) => (
                          <span
                            key={index}
                            className="bg-purple-600/20 text-purple-300 text-sm px-3 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => {
                      setVerificationResult(null);
                      setCardNumber('');
                    }}
                    className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                  >
                    Verify Another Card
                  </button>
                  <Link to="/" className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 text-center">
                    Back to Home
                  </Link>
      </div>
              </div>
            </motion.div>
          )}

          {/* QR Code and Document Upload Placeholders */}
          {(verificationMethod === 'qr-code' || verificationMethod === 'document') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 hover:border-purple-500/40 transition-all duration-500">
                <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-12 h-12 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {verificationMethod === 'qr-code' ? 'QR Code Verification' : 'Document Upload'}
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  {verificationMethod === 'qr-code' 
                    ? 'This feature will be available soon. Please use card number verification for now.'
                    : 'This feature will be available soon. Please use card number verification for now.'
                  }
                </p>
                <button
                  onClick={() => setVerificationMethod('')}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105"
                >
                  Choose Another Method
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </HeroHighlight>
    </div>
  );
};

export default VerifyCard;


