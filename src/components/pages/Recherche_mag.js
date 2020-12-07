import React from 'react';
import '../../App.css';
import Rech_mag from '../Rech_mag';
import NavbarAdmin from '../NavbarAdmin';
import {useLocation} from 'react-router-dom'
function Recherche_mag(props) {
  const location = useLocation();
  var token='none'
  try{ token = location.state.token;}
  catch{}
  console.log('recherche magasin ->  '+token);
    return (
                       
        <>
           <NavbarAdmin token={token}/>
           <Rech_mag token={token}/>
        </>    
           
      );
}

export default Recherche_mag;