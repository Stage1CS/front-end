import React from 'react';
import '../../App.css';
import AcceuilAdmin from '../AcceuilAdmin';
import NavbarAdmin from '../NavbarAdmin';
import {useState} from 'react';


function Admin() {
  const [token, setToken] =useState("");
    return (
        
                
        <>
            <div style='color:red'> {token } </div>
           <NavbarAdmin/>
           <AcceuilAdmin />
        </>    
           
      );
}

export default Admin;