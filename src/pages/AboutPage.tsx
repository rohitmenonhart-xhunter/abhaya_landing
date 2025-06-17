import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20"> {/* Add padding to account for fixed header */}
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; 