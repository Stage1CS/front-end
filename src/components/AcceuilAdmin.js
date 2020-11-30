import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AcceuilAdmin.css';
import './CardsAdmin.css'
import CardItemAdmin from './CardItemAdmin';

function AcceuilAdmin() {
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
            />
            <CardItemAdmin
              src='images/loupe.jpg'
              text='Rechercher magasin'
              path='/Recherche_mag'
            />
             <CardItemAdmin
              src='images/livreur.jpg'
              text='Ajouter livreur'
              path='/Ajout_Livreur'
            />
            <CardItemAdmin
              src='images/location.jpg'
              text='Ajouter point de vente'
              path='/Ajout_Magasin'
            /> 
             <CardItemAdmin
              src='images/import.png'
              text='Importer des données'
              path='/Import'
            />   
             <CardItemAdmin
              src='images/flech.PNG'
              text='Exporter des données'
              path='/Export'
            />               
          </ul>
        </div>
      </div>
          
    </div>
  );
}

export default AcceuilAdmin;