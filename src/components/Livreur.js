import React from 'react';
import '../App.css';
import './Livreur.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {setPostName , useEffect} from 'react';


function Livreur() {
    const location = useLocation();
    var token = location.state.token;
    console.log("token :  ->"+token);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example'})
        };
        fetch('https://laravelapi.ouedsmar.com/public/api/livreur', requestOptions)
            .then(response => response.json())
            .then(data => setPostName(data.name));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

  return (

 <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Veuillez remplir les informations de votre livreur</h2> 

      <div className='form-group'> 
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" id="name" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Prénom :</label>
          <input type="text" name="=" id="" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Numéro de téléphone :</label>
          <input type="text" name="" id="" />     
      </div>

      <Link to='/Admin' className='nav-links'>
            <input type="submit" value="Envoyer"/> 
      </Link>      

     </div>
</form>
    </div>

  );
}

export default Livreur;