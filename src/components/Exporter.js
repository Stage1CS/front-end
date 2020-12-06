import React from 'react';
import '../App.css';
import './Exporter.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


function Exporter(props) {
    const location = useLocation();
    var token = location.state.token;
    console.log("token :  ->"+token)

    const submitHandler = e => {
      e.preventDefault();
    }

    const ExportDataM = () => {
        fetch('https://laravelapi.ouedsmar.com/public/api/exportmagasin?token='+token, {
        method:'GET',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          }),
        });
      }

     const ExportDataL = () => {
      fetch('https://laravelapi.ouedsmar.com/public/api/exportlivreur?token='+token, {
        method:'GET',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          }),
        });
      }

    
  return (

    <div className='hero-container'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

     <form onSubmit={submitHandler}>
      <div className='form-inner'>

      <h2>Vous voullez exporter les données à partir de quelle table ?</h2> 

      <Link to='/Admin' className='nav-links'>
            <input type="submit" onClick={ () => ExportDataM()} value="Exporter Magasins"/> 
      </Link>

      <Link to='/Admin' className='nav-links'>
            <input type="submit" onClick={ () => ExportDataL()}  value="Exporter Livreurs"/> 
      </Link>        

     </div>
    </form>
    </div>

  );
}

export default Exporter;