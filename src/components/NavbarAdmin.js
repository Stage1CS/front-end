import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavbarAdmin.css';

function NavbarAdmin(props) {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);
 
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
 
   const showButton = () => {
     if (window.innerWidth <= 960) {
       setButton(false);
     } else {
       setButton(true);
     }
   };
 
   useEffect(() => {
     showButton();
   }, []);
 
   window.addEventListener('resize', showButton);

        return(
        <>
         <nav className="navbar">         
            <div className="navbar-container">
            <Link to={{pathname:"/Admin",state:{token:props.token}}} className="navbar-logo" onClick={closeMobileMenu}>       
            <i className="fas fa-truck-loading"></i>
            </Link>

            <Link to={{pathname:"/Admin",state:{token:props.token}}} className="navbar-logo" onClick={closeMobileMenu}>       
            Go Delivery
            </Link>

            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
               <Link to={{pathname:"/Admin",state:{token:props.token}}} className='nav-links' onClick={closeMobileMenu}>
                  Acceuil
               </Link>
               </li>

              
               <li>
               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                 Déconnexion
               </Link>
               </li>
            </ul>
                
            </div>         
         </nav>
        </> 
    );
}

export default NavbarAdmin;