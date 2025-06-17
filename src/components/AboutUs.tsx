import React, { useEffect, useRef } from 'react';
import { Users, Heart, Sparkles, Star, Linkedin, Instagram, Facebook } from 'lucide-react';

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On dedicated page, we want the component to be visible immediately
    if (sectionRef.current && window.location.pathname === '/about') {
      sectionRef.current.classList.add('animate-fade-in');
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.transform = 'translateY(0)';
    } else {
      // On homepage, we use intersection observer for animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section id="about-us" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 via-white to-purple-50 opacity-0 transform translate-y-10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-serif-title">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
              <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 w-full"></div>
              
              <div className="p-10">
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      To remain silent was never an option for the founders of ABHAYA. Sexual harassment and abuse continue to afflict individuals across the globe, resulting in profound physical, emotional, and psychological consequences.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Abhaya recognizes the urgency of addressing these issues and aims to create a safer, more supportive environment for survivors, and their families.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Our project seeks to empower survivors, educate the public, and hold perpetrators accountable while advocating for systemic change.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center pt-8 border-t border-gray-100">
                  <p className="text-gray-500 italic flex items-center text-center">
                    <Heart className="w-5 h-5 text-pink-400 mr-2 flex-shrink-0" />
                    Committed to creating a safer, more supportive environment for survivors
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Connect Card */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-3xl shadow-2xl overflow-hidden h-full">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
              </div>
              
              <div className="p-10 relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 text-center font-serif-title">Connect With Us</h3>
                
                <div className="flex justify-center space-x-6 mb-10">
                  <a href="#" className="group w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg">
                    <Linkedin className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="#" className="group w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg">
                    <Instagram className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="#" className="group w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg">
                    <Facebook className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
                
                <div className="text-center">
                  <button className="group bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center">
                      Contact Us
                      <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Address Card */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif-title">Our Location</h3>
                <p className="text-gray-700 leading-relaxed">
                  Shera Square<br />
                  212, Choolaimedu High Road<br />
                  Choolaimedu, Near Lotus Beauty Parlour<br />
                  Tamil Nadu, India
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif-title">Contact Details</h3>
                <p className="text-gray-700 mb-4">
                  <a href="mailto:abhayacares@gmail.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                    abhayacares@gmail.com
                  </a>
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 