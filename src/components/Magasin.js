import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Rech.css';
import './Magasin.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import {Link} from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


function GetIcon(_iconSize, forecast) {
    return L.icon({
      iconUrl: require("../Static/Icons/map-marker.png"),
      iconSize: [_iconSize],
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

            <MapContainer className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>

                <TileLayer
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 
                />

                <Marker position={[36.721997, 3.1901515]}>


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