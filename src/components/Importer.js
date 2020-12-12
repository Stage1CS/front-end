import React from 'react';
import '../App.css';
import './Importer.css';
import {useLocation} from 'react-router-dom';

function Importer(props) {
  const location = useLocation();
  /*var token = location.state.token;*/

  function  read(e) {
    let files = e.target.files;
    let reader = new FileReader();
    const csv = files[0]
    reader.readAsText(csv)

    reader.onload = r => {

        var data = r.target.result
        var splitted_data = data.split('\n');
        splitted_data.shift();
        /*console.log(splitted_data[0].split(','));
        console.log(splitted_data)*/
        
        for(var i =0;i<splitted_data.length;i++){
          var data2 = splitted_data[i].split(',')
          var nom = data2[1];
          var prénom = data2[2];
          var email= data2[3];
          var num = data2[4];

          console.log(nom,prénom,email,num,props.token)
          

          fetch('https://laravelapi.ouedsmar.com/public/api/livreur?token='+props.token, {
            method:'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "nom="+nom+"&prénom="+prénom+"&mail="+email+"&num="+num
        })
      }
      
    };   
}

/*function  read_m(e) {
  let files = e.target.files;
  let reader = new FileReader();
  const csv = files[0]
  reader.readAsText(csv)

  reader.onload = r => {

      var data = r.target.result
      var splitted_data = data.split('\n');
      splitted_data.shift();
      console.log(splitted_data[0].split(','));
      console.log(splitted_data)
      
      for(var i =0;i<splitted_data.length;i++){
        var data2 = splitted_data[i].split(',')
        var name = data2[1];
        var detail = data2[2];
        var Phone= data2[3];
        var email = data2[4];
        var lat = data2[5];
        var lng = data2[6];
        var updated_at = data2[7];
        var created_at = data2[8];

        console.log(name,detail,Phone,email,lat,lng,updated_at,created_at,props.token)
        

        fetch('https://laravelapi.ouedsmar.com/public/api/magasin?token='+props.token, {
          method:'POST',
          headers: new Headers({
              'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: "name="+name+"&detail="+detail+"&Phone="+Phone+"&email="+email+"&lat="+lat+"&lng="+lng+"&updated_at="+updated_at+"&created_at="+created_at
      })
    }
    
  };   
}*/

  return (

    <div className='hero-container__livreur'> 
    <video src='/videos/Office.mp4' autoPlay loop muted />    
    <form>
      <div className='form-inner'>

      <h2>Vous voullez importer les données vers quelle table ?</h2> 

      <h2>Livreurs :</h2>
      <input type="file" name="file" onChange={e => read(e)} />

      <h2>Magasins :</h2>
      <input type="file" name="file" /*onChange={e => read_m(e)}*//>

     </div>
    </form>
    </div>

  );
}

export default Importer;