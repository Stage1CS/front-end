import React from 'react';
import { Link } from 'react-router-dom';

function CardItemAdmin(props) {
  console.log(props)
  return (
    <>
      <li className='cards__item__admin'>
        <Link className='cards__item__link__admin' to={{pathname:props.path,state:{token:props.token}}}>
          <figure className='cards__item__pic-wrap__admin' data-category={props.label}>
            <img
              className='cards__item__img__admin'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info__admin'>
            <h5 className='cards__item__text__admin'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemAdmin;