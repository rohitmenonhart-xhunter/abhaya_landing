import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/', section: '' },
    { name: 'About Us', href: '/about', section: '' },
    { name: 'Services', href: '/services', section: '' },
    { name: 'Open Hearts', href: '/#open-hearts', section: 'open-hearts' },
    { name: 'Hear from Others', href: '/#stories', section: 'stories' },
    { name: 'Get Involved', href: '/get-involved', section: '' },
    { name: 'Contact Us', href: '/#contact', section: 'contact' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (section && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-warm-white/95 backdrop-blur-md shadow-xl border-b border-warm-white-300' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-off-black rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-warm-white" />
            </div>
            <span className={`text-3xl font-bold ${
              isScrolled ? 'text-off-black' : 'text-warm-white drop-shadow-lg'
            }`}>
              ABHAYA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => scrollToSection(e, item.section)}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-off-black hover:text-off-black-100 hover:bg-warm-white-200 px-3 py-2 rounded-lg' 
                      : 'text-warm-white hover:text-warm-white-200 drop-shadow-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-off-black hover:bg-warm-white-200' : 'text-warm-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-warm-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-2xl border border-warm-white-300">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.section);
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-3 text-off-black hover:text-off-black-100 hover:bg-warm-white-200 rounded-xl transition-all duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;