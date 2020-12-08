import React from 'react';
import '../../App.css';
import Update_liv from '../Update_liv';
import NavbarAdmin from '../NavbarAdmin';
import {useLocation} from 'react-router-dom'

function UpdateLiv(props) {
  const location = useLocation();
  var token='none'
  var nom='none'
  var prénom='none'
  var mail='none'
  var num='none'
  var id_livreur='none'
  try{ token = location.state.token;
       nom = location.state.nom;
       prénom = location.state.prénom;
       mail = location.state.mail;
       num = location.state.num;
       id_livreur = location.state.id_livreur;
    }
  catch{
  }

    return (
                       
        <>
           <NavbarAdmin token={token}/>
           <Update_liv token={token} nom={nom} prénom={prénom} mail={mail} num={num} id_livreur={id_livreur}/>
        </>    
           
      );
}

export default UpdateLiv;