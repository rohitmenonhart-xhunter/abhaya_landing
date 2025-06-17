import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50 via-white to-gray-50 opacity-0 transform translate-y-10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Send className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-serif-title">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Reach out to us for support, guidance, or to get involved in our mission. 
            We're here to listen and help in any way we can.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-purple-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-serif-title">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Shera Square<br />
                    212, Choolaimedu High Road<br />
                    Choolaimedu, Near Lotus Beauty Parlour<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-teal-100 hover:border-teal-200 transform hover:-translate-y-2">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-serif-title">Email Us</h3>
                  <p className="text-gray-600 text-lg">
                    <a href="mailto:abhayacares@gmail.com" className="hover:text-teal-600 transition-colors font-medium">
                      abhayacares@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-pink-100 hover:border-pink-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-serif-title">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="group w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Instagram className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="group w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Facebook className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="group w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Twitter className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif-title">Send us a Message</h3>
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-lg"
                  placeholder="Share your thoughts or questions..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Send Message
                <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;