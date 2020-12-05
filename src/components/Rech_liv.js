import React from 'react';
import '../App.css';
import './Rech_liv.css';
import {useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom'

function Rech_liv() {

  const location = useLocation();
  var token = location.state.token;
  console.log("token ->"+token)
  const [data, setData] = useState([])
  const [rech, setRech] = useState('')
  
useEffect(() => {
    fetch('https://laravelapi.ouedsmar.com/public/api/livreur='+token)
      .then(response => response.json())
      .then(data => setData(data))},[]);
      console.log(data);

  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

<form>

<div className='form-inner'>

 <h2>Livreur</h2>   

 <div className='form-group'> 
     <label htmlFor="name">Nom :</label>
     <input type="text" name="name" id="nom" placeholder="Recherche..." onChange={Event => {setRech(Event.target.value)}}/>     
 <h2>

 {data
 .filter(val => {return  (val.nom.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.prénom.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.mail.toLocaleLowerCase().includes(rech.toLocaleLowerCase()))  || (val.num.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) })
 .map((val,key) => {
   return<div className='form-inner'><p>{val.nom} {val.prénom} {val.mail} {val.num}</p></div>
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
