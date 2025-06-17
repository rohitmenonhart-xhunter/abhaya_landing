import React from 'react';
import { Heart, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-off-black text-warm-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-warm-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-warm-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Enhanced Logo and Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-warm-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-off-black" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-warm-white-300 animate-pulse" />
                </div>
              </div>
              <span className="text-3xl font-bold text-warm-white">
                ABHAYA
              </span>
            </div>
            <p className="text-warm-white-200 leading-relaxed text-lg mb-6">
              Empowering survivors through compassion, support, and advocacy. 
              Together, we build a safer and more equitable world for all.
            </p>
            <div className="flex items-center space-x-2 text-warm-white-300">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Made with love for survivors</span>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-warm-white">Quick Links</h3>
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
                  className="block text-warm-white-200 hover:text-warm-white transition-all duration-300 hover:translate-x-2 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Support */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-warm-white">Get Support</h3>
            <p className="text-warm-white-200 mb-6 text-lg">
              If you need immediate help or support, please don't hesitate to reach out.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-warm-white-300" />
                <a 
                  href="mailto:abhayacares@gmail.com"
                  className="text-warm-white-200 hover:text-warm-white transition-colors"
                >
                  abhayacares@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-warm-white-300 mt-1" />
                <span className="text-warm-white-200 text-sm">
                  Shera Square, Chennai<br />
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            <a 
              href="mailto:abhayacares@gmail.com"
              className="inline-block bg-warm-white text-off-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-warm-white-200 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
          </div>
        </div>

        <hr className="border-off-black-200 my-12" />
        
        <div className="text-center">
          <p className="text-warm-white-300 text-lg">
            © 2025 ABHAYA. All rights reserved. | Made with ❤️ for survivors and supporters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;