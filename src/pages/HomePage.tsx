import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VisionMission from '../components/VisionMission';
import OpenHearts from '../components/OpenHearts';
import HearFromOthers from '../components/HearFromOthers';
import GetInvolved from '../components/GetInvolved';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VisionMission />
      <OpenHearts />
      <HearFromOthers />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage; 