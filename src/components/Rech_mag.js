import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech_mag.css';
import {Link} from 'react-router-dom';
import JSONDATA from '../MOCK_DATA.json';
import {useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom'


function Rech_mag() {

  const location = useLocation();
  var token = location.state.token;
  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [rech, setRech] = useState('')
  
useEffect(() => {
    fetch('https://laravelapi.ouedsmar.com/public/api/magasin?token='+token)
      .then(response => response.json())
      .then(data => setData( data ))},[]);
      console.log(data);
      console.log('got the data')
  
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />  

<form className='ko'>

<div className='form-inner'>

 <h2>Livreur</h2>   

 <div className='form-group'> 
     <label htmlFor="name">Recherche:</label>
     <input type="text" name="name" id="nom" type="text" placeholder="Recherche..." onChange={Event => {setRech(Event.target.value)} }/>     
 <h2>

 {JSONDATA
 .filter(val => {return  (val.first_name.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.email.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.last_name.toLocaleLowerCase().includes(rech.toLocaleLowerCase()))})
 .map((val,key) => {
   return<div className='form-inner'><p> {val.last_name} {val.email} {val.number}</p></div>
 }
 )}

 </h2>

</div>
</div>

</form>  


    </div>

  );
}

export default Rech_mag;