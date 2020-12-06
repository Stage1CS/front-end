import React from 'react';
import 'leaflet/dist/leaflet.css';
import {Link} from 'react-router-dom';
import './Magasin.css';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';

function Magasin(props) {

    const location = useLocation();
    var token = location.state.token;
    console.log("magasin :  ->"+token);

    const[name, setName] =useState("");
    const[detail, setDetail] =useState("");
    const[Phone, setPhone] =useState("");
    const[email, setEmail] =useState("");
    const[lat, setLat] =useState("");
    const[lng, setLng] =useState("");

    const submitHandler = e => {
                    e.preventDefault();
    }
    
    const postData = () => {
        fetch(' https://laravelapi.ouedsmar.com/public/api/magasin?token='+token, {
            method: 'post',
            body: "name="+name+"detail="+detail+"Phone="+Phone+"email="+email+"lat="+lat+"lng="+lng
                }).then(function(response) {
                    return response.json();
                }).then(function() {
            });
    }

   
            
                return (
            <div className='hero-container'>
                <video src='/videos/Office.mp4' autoPlay loop muted />

                <form onSubmit={submitHandler}>
                <div className='haha'>
                    <div className='form-inner'> 

                        <h2>Veuillez remplir les informations sur le point à ajouter </h2>        

                        <div className='form-group'> 
                             <label htmlFor="name">Nom :</label>
                             <input type="text" name="name" id="name" onChange={Event => {setName(Event.target.value)}}/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="detail">Description detaillée du magasin :</label>
                             <input type="text" name="detail"  id="detail" onChange={Event => {setDetail(Event.target.value)}}/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="Phone">Numéro de téléphone :</label>
                              <input type="text" name="Phone" id="Phone" onPhone={Event => {setPhone(Event.target.value)}}/>     
                        </div> 

                        <div className='form-group'> 
                              <label htmlFor="email">Email :</label>
                              <input type="text" name="email" id="email" onEmail={Event => {setEmail(Event.target.value)}}/>     
                        </div>

                        <div id='map'></div> 

                        <div className='form-group'> 
                              <label htmlFor="lng"> longitude :</label>
                              <input type="text" name="lng" id="lng" onChange={Event => {setLng(Event.target.value)}}/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="lat">latitude :</label>
                              <input type="text" name="lat" id="lat" onChange={Event => {setLat(Event.target.value)}}/>     
                        </div>

                        <Link to='/Admin' className='nav-links'>
                             <input type="submit" onClick={ () => postData()} value="Envoyer"/> 
                         </Link>      

                    </div>
                    </div>
                </form>
            </div>
        );
    }

export default Magasin;