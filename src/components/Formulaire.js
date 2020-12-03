import React,{useState} from 'react';
import '../App.css';
import './Formulaire.css';
import {Link} from 'react-router-dom';

function Formulaire({Login, error}) {

    const[details, setDetails] =useState({email:"", password:""});
    const [token, setToken] =useState("");

    const submitHandler = e => {
        e.preventDefault();

        Login(details,setToken);
    }

  return (

<div className='hero-container__formulaire'>   

<form onSubmit={submitHandler}>
  
    <div className='form-inner'>

      <h2>Connexion</h2> 
      {(error !== "") ? (<div className="error">{error}</div> ): ""}

      <div className='form-group'> 
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email}/>     
      </div>

      <div className='form-group'> 
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" name="password" id="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password}/>     
      </div>

            <div>{token}</div>
            <input type="submit" value="Se connecter"/> 
   

     </div>
</form>
</div>

  )
}

export default Formulaire;