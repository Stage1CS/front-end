import React from 'react';
import '../../App.css';
import Magasin from '../Magasin';
import NavbarAdmin from '../NavbarAdmin';
import {useLocation} from 'react-router-dom'

function Ajout_Magasin(props) {
  const location = useLocation();
  
  try{ token = location.state.token;}
  catch{
    var token=props.token
  }

  
    return (
                       
        <>
        
           <NavbarAdmin token={token}/>
           <Magasin token={token}/>
           
        </>    
           
      );
}

export default Ajout_Magasin;