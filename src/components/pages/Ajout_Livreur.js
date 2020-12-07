import React from 'react';
import '../../App.css';
import Livreur from '../Livreur';
import NavbarAdmin from '../NavbarAdmin';
import {useLocation} from 'react-router-dom';
function Ajout_Livreur(props) {
  const location = useLocation();
  var token='none'
  try{ token = location.state.token;}
  catch{}

    return (
                       
        <>
           <NavbarAdmin token={token}/>
           <Livreur token={token}/>
        </>    
           
      );
}

export default Ajout_Livreur;