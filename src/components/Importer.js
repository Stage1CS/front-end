import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Importer.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Importer() {
  const location = useLocation();
  var token = location.state.token;
  console.log("token :  ->"+token)
  
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
    <form>
      <div className='form-inner'>

      <h2>Vous voullez importer les données vers quelle table ?</h2> 

      <select name=''> 
          <option value='Séléctionner'>Séléctionner</option>
          <option value='Livreur'>Livreur</option>
          <option value='Magasin'>Magasin</option>      
      </select>

      <label for="file">Sélectionner le fichier à envoyer</label>
      <input type="file" id="file" name="file" multiple></input>

      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Importer"/> 
      </Link>      

     </div>
    </form>
    </div>

  );
}

export default Importer;