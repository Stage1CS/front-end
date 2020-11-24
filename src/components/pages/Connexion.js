import React, {useState} from 'react';
import '../../App.css';
import Formulaire from '../../components/Formulaire';

function Connexion() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123" 
  }

  const[user, setUser] = useState({name:"", email:""});
  const[error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
     console.log("Logged in");
    } else {
      console.log("details dont match!");
    }
  }

  const Logout = () => {
    console.log("Logout");
  }

  return(
    <div className="Connexion"> 
        {(user.email != "") ? (
           <div className="welcome">
             <h2>Welcome, <span>{user.name}</span></h2>
             <button>Déconnexion</button>
           </div>
        ):(
          <Formulaire Login={Login} error={error}/> 
        )}
    </div>
  );
}

export default  Connexion();

