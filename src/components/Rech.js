import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech.css';
import {Link} from 'react-router-dom';


function Rech() {
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Recherche</h2> 

      

      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Rechercher"/> 
      </Link>      

     </div>
</form>
    </div>

  );
}

export default Rech;