import React, {useState} from 'react';
import '../../App.css';
import Formulaire from '../Formulaire';
import Navbar from '../Navbar';
import {useHistory} from 'react-router-dom';

function Connexion() {
    const adminUser = {
        email : "admin@admin.com",
        password: "admin123"
    }
    const history = useHistory()

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");

    const Login = (details,setToken) => 
    {
        fetch('https://laravelapi.ouedsmar.com/public/api/login',
        {
            method:'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "email="+details.email+ "&password="+details.password
        })
      .then((response) => response.json())
      .then((responseText) =>{

        if (responseText.access_token)
        {
            setToken(responseText.access_token)
            history.push({
                pathname: "/Admin",
                state: { token: responseText.access_token.toString() },
              });
            
        }
        else alert("mot de passe erroné");
     })
     .catch((error) =>
     {console.error(error);
    });  
    }   
  return (
    <>
    <Navbar/>
    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
    
             <Formulaire Login={Login} error={error}/>     
    </div> 
    </>
  );
}

export default Connexion;