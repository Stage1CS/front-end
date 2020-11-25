import React, {useState} from 'react';
import '../../App.css';
import Formulaire from '../Formulaire';
import Navbar from '../Navbar';

function Connexion() {
    const adminUser = {
        email : "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Vous etes connecté");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Erreur");
            setError("Erreur");
        }
    }

    const Logout = () => {
        setUser({name:"", email:""});
    }

  return (
    <>
    <Navbar/>
    <div className ="Connexion">
        {(user.email != "") ? (
             <div className ="Welcome">
                  <h2>Welcome,  <span>{user.name}</span></h2>  
                  <button onClick={Logout}>Logout</button>
             </div>
        ) : (   
             <Formulaire Login={Login} error={error}/>     
        )
        }

    </div> 
    </>
  );
}

export default Connexion;