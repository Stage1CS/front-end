import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech_liv.css';
import {Link} from 'react-router-dom';
import JSONDATA from '../MOCK_DATA.json';
import {useState} from 'react';

function Rech_liv() {
  const [name, setName] = useState('')
  const [prenom, setPrenom] = useState('')
  const [mail, setMail] = useState('')
  const [num, setNum] = useState('')
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

<form>

     <div className='form-inner'>

      <h2>Magasins</h2> 

      <label>Par nom</label>
      
      <input type="text" placeholder="Recherche..." onChange={Event => {setName(Event.target.value)} }/>
       
       <label>Par prenom    </label>
      
      <input type="text" placeholder="Recherche..." onChange={Event => {setPrenom(Event.target.value)} }/>

<label>Par mail</label>
      
      <input type="text" placeholder="Recherche..." onChange={Event => {setMail(Event.target.value)} }/>

       <label>Par numero </label>
      
      <input type="text" placeholder="Recherche..." onChange={Event => {setNum(Event.target.value)} }/>
       
       
     </div>

</form>
    </div>

  );
}

export default Rech_liv;
