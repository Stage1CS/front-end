import React from 'react';
import '../../App.css';
import Update_mag from '../Update_mag';
import NavbarAdmin from '../NavbarAdmin';
import {useLocation} from 'react-router-dom'

function UpdateMag(props) {
  const location = useLocation();
  var token='none'
  var name='none'
  var detail='none'
  var Phone='none'
  var email='none'
  var lat='none'
  var lng='none'
  var id='none'
  try{ token = location.state.token;
       name = location.state.name;
       detail = location.state.detail;
       Phone = location.state.Phone;
       email = location.state.email;
       lat = location.state.lat;
       lng = location.state.lng;
       id = location.state.id;
    }
  catch{
  }

    return (
                       
        <>
           <NavbarAdmin token={token}/>
           <Update_mag token={token} name={name} detail={detail} email={email} Phone={Phone} lat={lat} lng={lng} id={id}/>
        </>    
           
      );
}

export default UpdateMag;