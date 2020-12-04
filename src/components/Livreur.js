import React from 'react';
import '../App.css';
import './Livreur.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';

function Livreur() {
    const location = useLocation();
    var token = location.state.token;
    console.log("token :  ->"+token)

  return (

 <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Veuillez remplir les informations de votre livreur</h2> 

      <div className='form-group'> 
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" id="name" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Prénom :</label>
          <input type="text" name="=" id="" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Numéro de téléphone :</label>
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

export default Livreur;