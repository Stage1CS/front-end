import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Navbar from '../Navbar';


function Home(props) {

  return (
    <>
      <Navbar token={props.token}/>
      <HeroSection token={props.token}/>
      <Cards />
    </>
  );
}

export default Home;