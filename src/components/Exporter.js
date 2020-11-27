import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Exporter.css';
import {Link} from 'react-router-dom';


function Exporter() {
  return (

    <div className='hero-container'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Vous voullez exporter les données à partir de quelle table ?</h2> 

      <select name=''> 
          <option value='Séléctionner'>Séléctionner</option>
          <option value='Livreur'>Livreur</option>
          <option value='Magasin'>Magasin</option>      
      </select>

      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Exporter"/> 
      </Link>      

     </div>
    </form>
    </div>

  );
}

export default Exporter;