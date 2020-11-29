import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Link} from 'react-router-dom';

class Magasin extends React.Component {
    constructor() {
        super();
        this.state = {
            markers: [[36.719719, 3.184080]],
        };
    }

    addMarker = (e) => {
        const { markers } = this.state;
        markers.pop();
        markers.push(e.latlng);
        this.setState({ markers });
    }

    render() {
        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;

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
                             <input type="email" name="email_proprietaire"  id="email_proprietaire" />     
                         </div>

                         <div className='form-group'> 
                              <label htmlFor="">Numéro de téléphone :</label>
                              <input type="text" name="" id="" />     
                         </div> 

            <div className='leaflet-container'>            
                <MapContainer
                    center={[36.719719, 3.184080]}
                    onClick={this.addMarker}
                    zoom={13}
                    maxZoom={18}
                    minZoom={5}   
                    style={{width: '100%',height: '150px'}}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {this.state.markers.map((position, idx) =>
                        <Marker key={`marker-${idx}`} position={position}></Marker>
                    )}
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
}

export default Magasin;