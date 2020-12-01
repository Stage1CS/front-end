import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech_liv.css';
import {Link} from 'react-router-dom';
import JSONDATA from '../MOCK_DATA.json';
import {useState} from 'react';

function Rech_liv() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [mail, setMail] = useState('')
  const [num, setNum] = useState('')
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

<form>

     <div className='form-inner'>

      <h2>Magasins</h2> 


      <select name=''> 
          <option value='Séléctionner'>Séléctionner</option>
          <option value='Nom'>Nom</option>
          <option value='Prénom'>Prénom</option>
          <option value='Mail'>Mail</option>
          <option value='Numéro de tel'>Numéro de tel</option>      
      </select>

      <div className='form-group'> 
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" id="nom" type="text" placeholder="Recherche..." onChange={Event => {setNom(Event.target.value)} }/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="name">Prénom :</label>
          <input type="text" name="name" id="prenom" type="text" placeholder="Recherche..." onChange={Event => {setPrenom(Event.target.value)} }/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="email">Mail :</label>
          <input type="text" name="email" id="mail" type="text" placeholder="Recherche..." onChange={Event => {setMail(Event.target.value)} }/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="num">Numéro de tel :</label>
          <input type="text" name="num" id="num" type="text" placeholder="Recherche..." onChange={Event => {setNum(Event.target.value)} }/>     
      </div>
       
     </div>

</form>
    </div>

  );
}

export default Rech_liv;