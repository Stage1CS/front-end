import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Link} from 'react-router-dom';
import './Magasin.css';

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
                <div className='haha'>
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

            <div id='map'>            
                
            </div> 
                      <div className='form-group'> 
                              <label htmlFor=""> longitude :</label>
                              <input type="text" name="lng" id="lng" />     
                        </div>

                        <div className='form-group'> 
                              <label htmlFor="">latitude :</label>
                              <input type="text" name="lat" id="lat" />     
                        </div>

                        <Link to='/Admin' className='nav-links'>
                             <input type="submit" value="Envoyer"/> 
                         </Link>      

                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Magasin;