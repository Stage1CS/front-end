import React, {useState, useEffect} from 'react';
import '../App.css';
import './Exporter.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

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
    
  return (

    <div className='hero-container'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    

     <form onSubmit={submitHandler}>
      <div className='form-inner'>

      <h2>Vous voullez exporter les données à partir de quelle table ?</h2>

        <ExcelFile element={<button>Download Stores</button>}>
                <ExcelSheet data={data} name="Employees">
                    <ExcelColumn label="name" value={data.name}/>
                    <ExcelColumn label="detail" value={data.detail}/>
                    <ExcelColumn label="Phone" value={data.Phone}/>
                    <ExcelColumn label="email" value={data.email}/>
                    <ExcelColumn label="lat" value={data.lat}/>
                    <ExcelColumn label="lng" value={data.lng}/>
                </ExcelSheet>
            </ExcelFile>

      <Link to='/Admin' className='nav-links'>
            <input type="submit"  value="Exporter Magasins"/> 
      </Link>

      <Link to='/Admin' className='nav-links'>
            <input type="submit"  value="Exporter Livreurs"/> 
      </Link>        

     </div>
    </form>
    </div>

  );
}

export default Exporter;