import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Navbar from '../Navbar';


function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;