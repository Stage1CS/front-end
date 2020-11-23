import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Objectifs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/satisfaction.jpg'
              text='Solution simple, claire, conviviale, simple à utiliser'
              path='/'
            />
            <CardItem
              src='images/produc.jpg'
              text='Amelioration de la productivité des équipes de livraison '
              path='/'
            />
            <CardItem
              src='images/visi.jpg'
              text='Meilleure visibilité du réseau de distribution '
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;