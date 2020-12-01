import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech_mag.css';
import {Link} from 'react-router-dom';
import JSONDATA from '../MOCK_DATA.json';
import {useState} from 'react';

function Rech_mag() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

<form>

     <div className='form-inner'>

      <h2>Magasins </h2> 

      <div className='form-group'> 
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" id="name" type="text" placeholder="Recherche..." onChange={Event => {setName(Event.target.value)} }/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="email">Mail :</label>
          <input type="text" name="email" id="email" type="text" placeholder="Recherche..." onChange={Event => {setEmail(Event.target.value)} }/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="phone">Numéro de tel :</label>
          <input type="text" name="phone" id="phone" type="text" placeholder="Recherche..." onChange={Event => {setPhone(Event.target.value)} }/>     
      </div>

      <h2>

      {JSONDATA.filter(val => {
        if (name ==''  && email=='' && phone=='') {
          return 
        } else if (val.first_name.toLowerCase().includes(name.toLowerCase()) || val.email.toLowerCase().includes(email.toLowerCase()) || val.number.toLowerCase().includes(phone.toLowerCase()) ) {
          return val
        }
      }).map((val,key) => {
        return<div className='form-inner'><p>{val.first_name} {val.last_name}</p></div>
      }
      )}

      </h2>
       
     </div>

</form>
    </div>

  );
}

export default Rech_mag;