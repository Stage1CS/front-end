import React from 'react';
import '../../App.css';
import Magasin from '../Magasin';
import NavbarAdmin from '../NavbarAdmin';

function Ajout_Magasin(props) {

  console.log("ajout magasin"+ props.token)
  
    return (
                       
        <>
        
           <NavbarAdmin/>
           <Magasin token={props.token}/>
           
        </>    
           
      );
}

export default Ajout_Magasin;