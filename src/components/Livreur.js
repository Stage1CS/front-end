import React from 'react';
import '../App.css';
import './Livreur.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';


function Livreur() {
    const location = useLocation();
    var token = location.state.token;

    const[info, setInfo] =useState({nom:"", prénom:"", mail:"", num:""});
    const submitHandler = e => {
                    e.preventDefault();
    }
    
    const postData = () => {
        fetch('https://laravelapi.ouedsmar.com/public/api/livreur?token='+token, {
            method:'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "nom="+info.nom+"&prénom="+info.prénom+"&mail="+info.mail+"&num="+info.num
        });
   
    }


  return (

 <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted /> 

     <form onSubmit={submitHandler}>
      <div className='form-inner'>

      <h2>Veuillez remplir les informations de votre livreur</h2> 

      <div className='form-group'> 
          <label htmlFor="name">Nom :</label>
          <input type="text" name="nom" id="nom" onChange={e => setInfo({...info,nom: e.target.value})} value={info.nom}/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="name">Prénom :</label>
          <input type="text" name="prénom" id="prénom" onChange={e => setInfo({...info,prénom: e.target.value})} value={info.prénom}/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="email">Email :</label>
          <input type="email" name="mail" id="mail" onChange={e => setInfo({...info,mail: e.target.value})} value={info.mail}/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Numéro de téléphone :</label>
          <input type="text" name="num" id="num" onChange={e => setInfo({...info,num: e.target.value})} value={info.num}/>     
      </div>

      <Link to={{pathname:"/Admin",state:{token:token}}} className='nav-links'>
            <input type="submit" onClick={ () => postData()} value="Envoyer"/> 
      </Link>      

     </div>
</form>
    </div>

  );
}

export default Livreur;