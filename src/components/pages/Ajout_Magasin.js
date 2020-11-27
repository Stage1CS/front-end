import React from 'react';
import '../../App.css';
import Magasin from '../Magasin';
import NavbarAdmin from '../NavbarAdmin';

function Ajout_Magasin() {
    return (
                       
        <>
           <NavbarAdmin/>
           <div className='hero-container__livreur'> 
                  <video src='/videos/Office.mp4' autoPlay loop muted />    
                  <Magasin />
           </div> 
        </>    
           
      );
}

export default Ajout_Magasin;