import React, { useEffect, useRef } from 'react';
import { Sparkles, Star, BookOpen, Scale, Users } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On dedicated page, we want the component to be visible immediately
    if (sectionRef.current && window.location.pathname === '/services') {
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
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 via-white to-purple-50 opacity-0 transform translate-y-10 relative overflow-hidden">
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
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-serif-title">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 lg:gap-16">
          {/* Counseling Service */}
          <div className="service-card opacity-0 transform translate-y-10 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-purple-100 hover:border-purple-200">
              <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 w-full"></div>
              
              <div className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-serif-title">COUNSELING</h3>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      <span className="text-purple-600 font-medium">Healing through support</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Abhaya believes in the healing power of compassionate support. To this end, we partner with licensed therapists and counselors to provide survivors with confidential online counseling sessions. Our database of therapists ensures that survivors can connect with professionals who are readily available to provide the emotional assistance they require.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                      <p className="text-purple-800 font-medium">Counsellor (WOW-Clinic) info G-Form link</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg">
                    <span className="flex items-center">
                      Access Counseling
                      <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal Advice Service */}
          <div className="service-card opacity-0 transform translate-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-teal-100 hover:border-teal-200">
              <div className="h-2 bg-gradient-to-r from-teal-600 to-blue-600 w-full"></div>
              
              <div className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-serif-title">LEGAL ADVICE</h3>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 text-teal-500 mr-2" />
                      <span className="text-teal-600 font-medium">Navigating justice</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Navigating the legal complexities after experiencing harassment or abuse can be challenging. Abhaya collaborates closely with legal professionals who specialize in this area to offer survivors expert guidance. We maintain a comprehensive database of legal experts and resources to facilitate easy access to information on legal rights and the reporting process, empowering survivors to seek justice confidently.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                      <p className="text-teal-800 font-medium">Mr G Anbazhagan is an advocate practicing at the High Court specializing in Human Rights and Property law</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg">
                    <span className="flex items-center">
                      Seek Legal Help
                      <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Awareness & Empowerment Service */}
          <div className="service-card opacity-0 transform translate-y-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-100 hover:border-amber-200">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500 w-full"></div>
              
              <div className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-serif-title">AWARENESS & EMPOWERMENT</h3>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                      <span className="text-amber-600 font-medium">Education & community action</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Gender matters everywhere in the world. And I would like today to ask that we should begin to dream about and plan for a different world. A fairer world. A world of happier men and happier women who are truer to themselves. And this is how we start: we must raise our daughters differently. We must also raise our sons differently.
                    </p>
                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                      <p className="text-amber-800 font-medium">Education-related resources & info, workshops, awareness program</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg">
                    <span className="flex items-center">
                      Join Our Programs
                      <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 