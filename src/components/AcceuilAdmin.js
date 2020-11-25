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

      <div className='cards__container__admin'>
        <div className='cards__wrapper__admin'>
          <ul className='cards__items'>

          <CardItemAdmin
              src='images/loupe.jpg'
              text='Effectuer une rechercher'
              path='/Recherche'
            />
             <CardItemAdmin
              src='images/livreur.jpg'
              text='Ajouter un livreur'
              path='/Ajout_Livreur'
            />
            <CardItemAdmin
              src='images/location.jpg'
              text='Ajouter un point de vente'
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