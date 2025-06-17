import React from 'react';
import Header from '../components/Header';
import OpenHearts from '../components/OpenHearts';
import Footer from '../components/Footer';

const OpenHeartsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16">
        <OpenHearts />
      </div>
      <Footer />
    </div>
  );
};

export default OpenHeartsPage; 