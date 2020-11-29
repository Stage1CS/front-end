import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech.css';
import './Magasin.css';
import { Map , TileLayer} from "react-leaflet";
import { MapContainer, Marker } from 'react-leaflet';
import {Link} from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import L, { Popup } from "leaflet";

function GetIcon(_iconSize){
    return L.Icon({
        iconUrl: require("../Static/Icons/map-marker.png"),
        iconSize : [_iconSize]
    });
}

function Magasin() {
 
  return (

    <div className='hero-container'>
      <video src='/videos/Office.mp4' autoPlay loop muted />    
     <form>
      <div className='form-inner'>

      <h2>Veuillez remplir les informations sur le point à ajouter </h2> 

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
<MapContainer className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18} >
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 
/>
<Marker position={[ 36.7367536, 3.1901515] }
icon={GetIcon(50)}>


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