import React from 'react';
import HeroText from '../components/HeroText';
import PhoneFrame from '../components/PhoneFrame';
import Rating from '../components/Rating';
import logo from '../assets/Dossier.webp';

const Home = () => {
  return (
    <div className="bg-gradient-to-b pt-24 from-beige to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <HeroText />
          <PhoneFrame 
            imageUrl={logo}
            alt="Nutrition App Screenshot"
          />
        </div>

        {/* <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <Rating score={4.5} reviews={50000} platform="App Store" />
          <Rating score={4.5} reviews={6000} platform="Google Play" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;