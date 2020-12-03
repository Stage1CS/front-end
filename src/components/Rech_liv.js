import React from 'react';
import '../App.css';

import './Rech_liv.css';

import JSONDATA from '../MOCK_DATA.json';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';

function Rech_liv() {
  const location = useLocation();
  //var token = location.state.token;
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [mail, setMail] = useState('')
  const [num, setNum] = useState('')
  const [rech, setRech] = useState('')

  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

    <form>

<div className='form-inner'>

 <h2>Livreur</h2>   

 <div className='form-group'> 
     <label htmlFor="name">Nom :</label>
     <input type="text" name="name" id="nom" type="text" placeholder="Recherche..." onChange={Event => {setRech(Event.target.value)} }/>     
 <h2>

 {JSONDATA
 .filter(val => {return  (val.first_name.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.email.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.last_name.toLocaleLowerCase().includes(rech.toLocaleLowerCase()))})
 .map((val,key) => {
   return<div className='form-inner'><p>{val.first_name} {val.last_name} {val.email} {val.number}</p></div>
 }
 )}

 </h2>

</div>
</div>

</form>
    </div>

  );
}

export default Rech_liv;
