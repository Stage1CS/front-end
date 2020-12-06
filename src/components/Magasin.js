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

    const[info, setInfo] =useState({name:"", detail:"", Phone:"", email:"", lng:"", lat:""});
    const submitHandler = e => {
                    e.preventDefault();
    }
    
    const postData = () => {
        fetch('https://laravelapi.ouedsmar.com/public/api/magasin?token='+token, {
            method:'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "name="+info.name+"&detail="+info.detail+"&Phone="+info.Phone+"&email="+info.email+"&lng="+info.lng+"&lat="+info.lat
        });
        console.log("info"+ info)     
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
                             <input type="text" name="name" id="name" onChange={e => setInfo({...info,name: e.target.value})} value={info.name}/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="detail">Description detaillée du magasin :</label>
                             <input type="text" name="detail"  id="detail" onChange={e => setInfo({...info,detail: e.target.value})} value={info.detail}/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="Phone">Numéro de téléphone :</label>
                              <input type="text" name="Phone" id="Phone" onChange={e => setInfo({...info,Phone: e.target.value})} value={info.Phone}/>     
                        </div> 

                        <div className='form-group'> 
                              <label htmlFor="email">Email :</label>
                              <input type="text" name="email" id="email" onChange={e => setInfo({...info,email: e.target.value})} value={info.email}/>     
                        </div>

                        <div id='map'></div> 

                        <div className='form-group'> 
                              <label htmlFor="lng"> longitude :</label>
                              <input type="text" name="lng" id="lng" onChange={e => setInfo({...info,lng: e.target.value})} value={info.lng}/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="lat">latitude :</label>
                              <input type="text" name="lat" id="lat" onChange={e => setInfo({...info,lat: e.target.value})} value={info.lat}/>     
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