import React from 'react';
import '../../App.css';
import Importer from '../Importer';
import NavbarAdmin from '../NavbarAdmin';
import {useLocation} from 'react-router-dom';

function Import(props) {

  const location = useLocation();
  var token='none'
  try{ token = location.state.token;}
  catch{}
  console.log('token->  '+token);
    return (
                       
        <>
           <NavbarAdmin token={token}/>
           <Importer token={token}/>
        </>    
           
      );
}

export default Import;