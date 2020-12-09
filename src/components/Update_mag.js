import React from 'react';
import 'leaflet/dist/leaflet.css';
import {Link} from 'react-router-dom';
import './Update_mag.css';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';

function Update_mag(props) {

    const location = useLocation();
    /*var token = location.state.token;*/

    const[info, setInfo] =useState({name:props.name, detail:props.detail, Phone:props.Phone, email:props.email, lng:props.lng, lat:props.lat, id:props.id});
    const submitHandler = e => {
        e.preventDefault();
}
    const ChangeData = () => {

        fetch('https://laravelapi.ouedsmar.com/public/api/magasin/'+ props.id+"?token="+props.token, {
            method:'PUT',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "name="+info.name+"&detail="+info.detail+"&Phone="+info.Phone+"&email="+info.email+"&lng="+info.lng+"&lat="+info.lat
        });
  
    } 
            
                return (
                    
            <div className='hero-container'>
                <video src='/videos/Office.mp4' autoPlay loop muted />

                <form onSubmit={submitHandler}>
                <div className='haha'>
                    <div className='form-inner'> 

                        <h2>Veuillez remplir les champs à modifier</h2>        

                        <div className='form-group'> 
                             <label htmlFor="name">Nom :</label>
                             <input type="text"    name="name" id="name" onChange={e => setInfo({...info,name: e.target.value})} value={info.name} required/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="detail">Description detaillée du magasin :</label>
                             <input type="text" name="detail"  id="detail" onChange={e => setInfo({...info,detail: e.target.value})} value={info.detail} required/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="Phone">Numéro </label>
                              <input type="tel" name="Phone" id="Phone" pattern="[0-9]*" onChange={e => setInfo({...info,Phone: e.target.value})} value={info.Phone} required/>     
                        </div> 

                        <div className='form-group'> 
                              <label htmlFor="email">Email :</label>
                              <input type="text" name="email" id="email" pattern="^([0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$" onChange={e => setInfo({...info,email: e.target.value})} value={info.email} required/>     
                        </div>
                        <input id="showmap" type='button'  onClick={window.addMap} value="show map" />
                        <div id='map' ></div> 

                        <div className='form-group'> 
                              <label htmlFor="lng"> longitude :</label>
                              <input type="text" name="lng" id="lng" onFocus={e => setInfo({...info,lng: e.target.value})} value={info.lng}/>     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="lat">latitude :</label>
                              <input type="text" name="lat" id="lat" onFocus={e => setInfo({...info,lat: e.target.value})} value={info.lat}/>     
                        </div>

                        <Link to={{pathname:"/Admin",state:{token:props.token}}} className='nav-links'>
                                    <input type="submit" onClick={ () => ChangeData()} value="Modifier"/> 
                        </Link>        

                    </div>
                    </div>
                </form>
            </div>
        );
    }

export default Update_mag;