import React from 'react';
import { Link } from 'react-router-dom';

function CardItemRech(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text1} {props.text2} {props.text3}</h5>
            <div>
                  <Link to='/Admin'>
                        <input className='nav-links' type="submit" value="Modifier"/> 
                  </Link>
                  <Link to='/Export'>
                        <input className='nav-links' type="submit" value="Supprimer"/> 
                  </Link> 
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemRech;