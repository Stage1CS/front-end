import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech.css';
import './Magasin.css';
import { Map , TileLayer} from "react-leaflet";
import { MapContainer, Marker,Popup } from 'react-leaflet';
import {Link} from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function GetIcon(_iconSize){
    return L.icon({
        iconUrl: require("../Static/Icons/map-marker.png"), 
        iconSize : [_iconSize]
    }) 
}

function Magasin() {
    const position=[1.35, 103.8] 
 
  return (

    <div className='hero-container'>
      <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>inscrivez les informations sur le point a ajouter </h2> 

      <div className='form-group'> 
          <label htmlFor="nom magasin">Nom :</label>
          <input type="text" name="nom magasin" id="nom magasin" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="email_proprietaire">Email :</label>
          <input type="email" name="email_proprietaire" id="email_proprietaire" />     
      </div>

      <div className='form-group'> 
          <label htmlFor="">Numéro de téléphone :</label>
          <input type="text" name="" id="" />     
      </div>    
      <div className='leaflet-container'> 
<MapContainer className="markercluster-map" center={position} zoom={10} maxZoom={18} >
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 
/>
<Marker position={position}
    icon={GetIcon(50)}>
      <Popup>   
          location of marker
      </Popup>   

</Marker>

</MapContainer>

      </div>
    
      <div className='form-group'> 
          <label htmlFor=""> longitude :</label>
          <input type="text" name="" id="" />     
      </div>
      <div className='form-group'> 
          <label htmlFor="">latitude :</label>
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

export default Magasin;