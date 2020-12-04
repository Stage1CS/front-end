import React from 'react';
import '../../App.css';
import AcceuilAdmin from '../AcceuilAdmin';
import NavbarAdmin from '../NavbarAdmin';
import {useState } from 'react';
import {useLocation} from 'react-router-dom';

function Admin() {

  const location = useLocation();
  var token='none'
  try{ token = location.state.token;}
  catch{

  }
    return (           
        <>
            <p>{token}</p>
           <NavbarAdmin />
           <AcceuilAdmin token={token}/>
        </>    
           
      );
}

export default Admin;