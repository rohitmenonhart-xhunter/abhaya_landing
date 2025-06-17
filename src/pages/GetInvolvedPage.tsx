import React from 'react';
import Header from '../components/Header';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16">
        <GetInvolved />
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage; 