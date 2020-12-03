import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AcceuilAdmin.css';
import './CardsAdmin.css'
import CardItemAdmin from './CardItemAdmin';

function AcceuilAdmin(props) {
  console.log(props.token)
  return (
    
    <div className='hero-container'>
      <video src='/videos/Office.mp4' autoPlay loop muted />
      <h3>Qu'es ce que vous voulez faire ?</h3>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <CardItemAdmin
              src='images/loupe.jpg'
              text='Rechercher livreur'
              path='/Recherche_liv'
              token={props.token}

            />
            <CardItemAdmin
              src='images/loupe.jpg'
              text='Rechercher magasin'
              path='/Recherche_mag'
              token={props.token}

            />
             <CardItemAdmin
              src='images/livreur.jpg'
              text='Ajouter livreur'
              path='/Ajout_Livreur'
              token={props.token}

            />
            <CardItemAdmin
              src='images/location.jpg'
              text='Ajouter point de vente'
              path='/Ajout_Magasin'
              token={props.token}

            /> 
             <CardItemAdmin
              src='images/import.png'
              text='Importer des données'
              path='/Import'
              token={props.token}

            />   
             <CardItemAdmin
              src='images/flech.PNG'
              text='Exporter des données'
              path='/Export'
              token={props.token}
      
            />               
          </ul>
        </div>
      </div>
          
    </div>
  );
}

export default AcceuilAdmin;