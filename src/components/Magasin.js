import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech.css';
import './Magasin.css';
import {Link} from 'react-router-dom';

function Magasin() {
  return (

    <div className='hero-container'>
      <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Veuillez remplir les informations sur le point à ajouter </h2> 

      <div className='form-group'> 
          <label htmlFor="nom magasin">Nom :</label>
          <input type="text" name="nom magasin" id="nom magasin" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="email_proprietaire">Email :</label>
          <input type="email" name="email_proprietaire" id="email_proprietaire" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Numéro de téléphone :</label>
          <input type="text" name="" id="" />     
      </div>
      <div className='form-group'> 
          <label htmlFor=""> longitude :</label>
          <input type="text" name="" id="" />     
      </div>
      <div className='form-group'> 
          <label htmlFor="">latitude :</label>
          <input type="text" name="" id="" />     
      </div>

      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Envoyer"/> 
      </Link>      

     </div>
</form>
    </div>

  );
}

export default Magasin;