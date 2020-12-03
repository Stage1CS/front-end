import React from 'react';
import '../../App.css';
import AcceuilAdmin from '../AcceuilAdmin';
import NavbarAdmin from '../NavbarAdmin';

function Admin(token) {
    return (
        
                
        <>
           <NavbarAdmin/>
           <AcceuilAdmin />
        </>    
           
      );
}

export default Admin;