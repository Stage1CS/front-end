import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Importer.css';
import {Link} from 'react-router-dom';


function Importer() {
  return (

    <div className='hero-container'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Veuillez importer les données vers quelle table ?</h2> 

      <select name='' className='form-group'> 
          <option value='Séléctionner'>Séléctionner</option>
          <option value='Livreur'>Livreur</option>
          <option value='Magasin'>Magasin</option>      
      </select>

      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Importer"/> 
      </Link>      

     </div>
    </form>
    </div>

  );
}

export default Importer;