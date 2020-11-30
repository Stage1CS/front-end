import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech_liv.css';
import {Link} from 'react-router-dom';
import JSONDATA from '../MOCK_DATA.json';
import {useState} from 'react';

function Rech_liv() {
  const [searchTerm, setSearchTerm] = useState('')
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

<form>

     <div className='form-inner'>

      <h2>Magasins </h2> 
      
      <input type="text" placeholder="Recherche..." onChange={Event => {setSearchTerm(Event.target.value)} }/>

      {JSONDATA.filter(val => {
        if (searchTerm == '') {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val,key) => {
        return<div className='form-inner'><p>{val.first_name}</p></div>
      }
      )}
       
     </div>

</form>
    </div>

  );
}

export default Rech_liv;