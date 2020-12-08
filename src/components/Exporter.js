import React, {useState, useEffect} from 'react';
import '../App.css';
import './Exporter.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { CSVLink } from "react-csv";
 

function Exporter(props) {
    const location = useLocation();
    var token = location.state.token;
    console.log("token :  ->"+token)

   

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])


  useEffect(() => {
      fetch('https://laravelapi.ouedsmar.com/public/api/magasin?token='+token)
        .then(response => response.json())
        .then(data => setData(data))},[]);

  useEffect(() => {
      fetch('https://laravelapi.ouedsmar.com/public/api/livreur?token='+token)
        .then(response => response.json())
        .then(data2 => setData2(data2))},[]);
    
  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

     <form>
      <div className='form-inner'>

      <h2>Vous voullez exporter les données à partir de quelle table ?</h2>

      <div>

          <CSVLink data={data} filename={"Magasins.csv"}>
                Exporter Magasins
          </CSVLink>;

      </div>

      <div>

          <CSVLink data={data2} filename={"Livreurs.csv"}>
                Exporter Livreurs
          </CSVLink>;

      </div>

      <Link to={{pathname:"/Admin",state:{token:token}}} className='nav-links'>
            <input type="submit"  value="Exporter Livreurs"/> 
      </Link>        

     </div>
    </form>
    </div>

  );
}

export default Exporter;