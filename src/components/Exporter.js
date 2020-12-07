import React, {useState, useEffect} from 'react';
import '../App.css';
import './Exporter.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import ReactToExcel from "react-html-table-to-excel";

function Exporter(props) {
    const location = useLocation();
    var token = location.state.token;
    console.log("token :  ->"+token)

    const [data, setData] = useState([])
    
  useEffect(() => {
      fetch('https://laravelapi.ouedsmar.com/public/api/magasin?token='+token)
        .then(response => response.json())
        .then(data => setData(data))},[]);
        console.log(data);


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

      <h2>Vous voullez exporter les données à partir de quelle table ? 

      <table id="test">
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>detail</th>
                  <th>Phone</th>
                  <th>email</th>
                  <th>lat</th>
                  <th>lng</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                  <td>50</td>
                </tr>
        </table></h2>



      <Link to='/Admin' className='nav-links'>
            <input type="submit" onClick={ () => ExportDataM()} value="Exporter Magasins"/> 
      </Link>

      <ReactToExcel
          className="btn"
          table="test"
          filename="Livreurs"
          sheet="sheet"
          buttonText="Exporter Livreurs"
      />  

      <Link to='/Admin' className='nav-links'>
            <input type="submit" onClick={ () => ExportDataL()}  value="Exporter Livreurs"/> 
      </Link>        

     </div>
    </form>
    </div>

  );
}

export default Exporter;