import React from 'react';
import '../App.css';
import './Modification_liv.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';


function Modification_liv() {
    
    
  return (

 <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted /> 

     <form >
      <div className='form-inner'>

      <h2>Veuillez remplir les nouvelles informations</h2> 

      <div className='form-group'> 
          <label htmlFor="name">Nom :</label>
          <input type="text" name="nom" id="nom" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="name">Prénom :</label>
          <input type="text" name="prénom" id="prénom" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="email">Email :</label>
          <input type="email" name="mail" id="mail"/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Numéro de téléphone :</label>
          <input type="text" name="num" id="num" />     
      </div>

      <Link to={{pathname:"/Admin"}} className='nav-links'>
            <input type="submit" value="Envoyer"/> 
      </Link>      

     </div>
</form>
    </div>

  );
}

export default Modification_liv;