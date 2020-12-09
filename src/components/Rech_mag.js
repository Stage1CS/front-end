import React from 'react';
import '../App.css';
import './Rech_mag.css';
import './CardsAdmin.css';
import CardItemMag from './CardItemMag';
import {useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom'


function Rech_mag(props) {

  const location = useLocation();
  /*var token = location.state.token;*/

  const [data, setData] = useState([])
  const [rech, setRech] = useState('')
  
useEffect(() => {
    fetch('https://laravelapi.ouedsmar.com/public/api/magasin?token='+props.token)
      .then(response => response.json())
      .then(data => setData(data))},[]);

  return (

  <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />  

    <form className='ko'>

      <div className='form-inner'>

              <h2>Magasin</h2>   

        <div className='form-group'> 
            <label htmlFor="name">Recherche :</label>
            <input type="text" name="rech" id="rech" placeholder="Recherche..." onChange={Event => {setRech(Event.target.value)}}/>  

              <h2>

                {data
                .filter(val => {return  (val.name.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.detail.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) || (val.email.toLocaleLowerCase().includes(rech.toLocaleLowerCase()))  || (val.Phone.toLocaleLowerCase().includes(rech.toLocaleLowerCase())) })
                .map((val) => {
                  return<div className='form-inner-haha'>

                  <div className='cards__container'>
                    <div className='cards__wrapper'>
                      <ul className='cards__items'>

                      <CardItemMag
                        src='../public/images/delivery-man.png'
                        text1={val.name} 
                        text2={val.detail}
                        text3={val.Phone}
                        text4={val.lat}
                        text6={val.lng}
                        text5={val.id}
                        input={<input id="showmap" type='button'  onClick={window.addMap} value="show map" />}
                        map={<div id='map'/>}
                        path='/Recherche_mag'
                        token={props.token}
                      />           
                      </ul>
                    </div>
                  </div>                    
              
              </div>
                  
                }
                )}

              </h2>

        </div>

      </div>

    </form>  


  </div>

  );
}

export default Rech_mag;