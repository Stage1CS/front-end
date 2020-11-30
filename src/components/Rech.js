import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech.css';
import {Link} from 'react-router-dom';
import CardItem from './CardItem';


function Rech() {
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Recherche  </h2> 
      <div>
      <label htmlFor="rechercher">rechercher :</label>
      <input type="text"
      id ="rechercher"
      placeholder="Rechercher un magasin, un livreur...           "
      defaultValue=""
      />

<CardItem
              src='images/satisfaction.jpg'
              text='Solution simple, claire, conviviale, simple à utiliser'
              path='/'
            />
      
      </div>
  




      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Rechercher"/> 
      </Link>  
      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Rechercher"/> 
      </Link>      

     </div>
</form>
    </div>

  );
}

export default Rech;