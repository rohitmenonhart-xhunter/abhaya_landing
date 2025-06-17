import React from 'react';
import { Heart, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Enhanced Logo and Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                </div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                ABHAYA
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Empowering survivors through compassion, support, and advocacy. 
              Together, we build a safer and more equitable world for all.
            </p>
            <div className="flex items-center space-x-2 text-purple-300">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Made with love for survivors</span>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-purple-200">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Open Hearts', href: '#open-hearts' },
                { name: 'Hear from Others', href: '#stories' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Support */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-purple-200">Get Support</h3>
            <p className="text-gray-300 mb-6 text-lg">
              If you need immediate help or support, please don't hesitate to reach out.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a 
                  href="mailto:abhayacares@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  abhayacares@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Shera Square, Chennai<br />
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            <a 
              href="mailto:abhayacares@gmail.com"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-12" />
        
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            © 2025 ABHAYA. All rights reserved. | Made with ❤️ for survivors and supporters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;