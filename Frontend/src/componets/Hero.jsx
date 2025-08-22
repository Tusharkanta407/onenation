"use client";
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Spotlight } from './ui/spotlight';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import ShinyButton from './ui/shiny-button';
import { Sparkle } from 'lucide-react';
import cardImage from '../assets/cardimage.jpg';
import { useEffect, useRef } from 'react';
import clipVideo from '../assets/clippa.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div id="home">
      <HeroHighlight className="h-full w-screen bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
        <Spotlight className="-top-40 left-0 md:left-0 md:-top-20" fill="white" />

        {/* Content */}
        <div className="max-w-7xl mx-auto pt-28 sm:pt-36 z-10 w-full px-6">
          {/* Centered badge above both columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium bg-gray-600/30 border z-50 space-x-3">
              <Sparkle className='text-purple-500'/>
              <div>One Card, Many Opportunities</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* Left column: text */}
            <div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed lg:leading-snug pt-8"
              >
                Empowering your journey with accessible inclusive and life changing benefits {" "}
                <Highlight className="text-blue dark:text-blue-400">designs by</Highlight>{" "}
                <Highlight className="text-purple-500">OneNation</Highlight>
              </motion.h1>

              <div className='pt-8 sm:pt-10 flex items-center gap-6'>
                <Link to="/get-card"><ShinyButton className='bg-purple-600 w-32 h-10'>Get Card</ShinyButton></Link>
                <Link to="/verify-card"><ShinyButton className='bg-purple-600 w-37 h-10'>Verify Card</ShinyButton></Link>
              </div>
            </div>

            {/* Right column: image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-center"
            >
              <img
                src={cardImage}
                alt="OneNation Card"
                className="w-[80vw] md:w-full max-w-xl h-auto rounded-3xl opacity-90 shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Video below */}
          <section className="w-full mt-12 md:mt-16">
            <div className="w-[90vw] md:w-[70vw] mx-auto">
              <video
                ref={videoRef}
                className="w-full aspect-video rounded-3xl border border-gray-700/50 bg-black/50"
                muted
                playsInline
                controls
                preload="metadata"
              >
                <source src={clipVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;