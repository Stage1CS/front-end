import React from 'react';
import '../../App.css';
import Rech_liv from '../Rech_liv';
import NavbarAdmin from '../NavbarAdmin';
import {useLocation} from 'react-router-dom'

function Recherche_liv(props) {
  const location = useLocation();
  var token='none'
  try{ token = location.state.token;}
  catch{
  }

    return (
                       
        <>
           <NavbarAdmin token={token}/>
           <Rech_liv token={token}/>
        </>    
           
      );
}

export default Recherche_liv;