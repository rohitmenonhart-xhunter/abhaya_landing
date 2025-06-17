import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-off-black"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Modern mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-warm-white-100/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-warm-white-200/20 via-transparent to-transparent"></div>
        </div>
        
        {/* Modern diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, white, white 1px, transparent 1px, transparent 10px)` 
          }}></div>
        </div>
      </div>
      
      {/* Enhanced animated background elements with static positioning */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-white-100/10 rounded-full blur-3xl animate-pulse animate-wave"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-warm-white-200/10 rounded-full blur-3xl animate-pulse animate-wave"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warm-white/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>
      </div>

      {/* Floating particles with enhanced effect */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.3)`,
            }}
          />
        ))}
        
        {/* Modern geometric elements instead of stars */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${(i % 3) * 30 + 10}%`,
              top: `${Math.floor(i / 3) * 60 + 20}%`,
            }}
          >
            <div className={`w-${6 + i % 3} h-${6 + i % 3} bg-gradient-to-br from-warm-white/10 to-warm-white-200/10 rounded-lg blur-md animate-breathe animate-wave`} 
              style={{ animationDelay: `${i * 0.5}s` }}></div>
          </div>
        ))}
      </div>

      <div 
        ref={heroRef} 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto opacity-0 transform translate-y-10"
        style={{
          transform: `translateY(10px)`,
          transition: 'transform 0.3s ease-out, opacity 0.8s ease-out',
          opacity: 0
        }}
      >
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <Sparkles className="w-16 h-16 text-warm-white animate-pulse" />
            <div className="absolute inset-0 w-16 h-16 bg-warm-white/20 rounded-full blur-xl animate-pulse animate-wave"></div>
            {/* Modern animated ring */}
            <div className="absolute inset-0 w-28 h-28 -translate-x-6 -translate-y-6 border-2 border-dashed border-warm-white/30 rounded-full animate-spin" 
              style={{ animationDuration: '12s' }}></div>
            <div className="absolute inset-0 w-24 h-24 -translate-x-4 -translate-y-4 border border-warm-white/20 rounded-full"></div>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-warm-white mb-8 leading-tight">
          <span className="block text-warm-white drop-shadow-2xl relative font-serif-title">
            ABHAYA
            <span className="absolute -inset-1 bg-gradient-to-r from-warm-white/10 to-warm-white-200/10 blur-xl rounded-full -z-10"></span>
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-light italic text-warm-white-200 mt-6 drop-shadow-lg">
            "I am another you"
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-warm-white-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg backdrop-blur-sm bg-warm-white/5 p-4 rounded-2xl">
          ABHAYA is an initiative by EMAI to advocate against sexual harassment and abuse. 
          It is guided by EMAI's commitment to nature and people and serves as a powerful voice 
          against sexual harassment and abuse.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative bg-warm-white text-off-black px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:bg-warm-white-200">
            <span className="flex items-center relative z-10">
              Know More
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 rounded-full bg-warm-white-200/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-1 rounded-full bg-warm-white-100/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </button>
          <button className="group relative border-2 border-warm-white/60 hover:border-warm-white text-warm-white hover:bg-warm-white/10 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 backdrop-blur-sm hover:shadow-2xl">
            <span className="relative z-10">Get Support</span>
            <span className="absolute inset-0 rounded-full bg-warm-white/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex justify-center relative group">
            <div className="w-1 h-3 bg-warm-white/70 rounded-full mt-2 animate-pulse"></div>
            <span className="absolute -inset-2 rounded-full bg-warm-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </div>
          <ArrowDown className="w-4 h-4 text-warm-white/70 mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;