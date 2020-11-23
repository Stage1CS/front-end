import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/acceuil.mp4' autoPlay loop muted />
      <h1>GO DELIVERY !</h1>
      <p>Meilleur service de livraison en algérie</p>     
    </div>
  );
}

export default HeroSection;