import react from 'react';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Connexion from './components/pages/Connexion';
import Admin from './components/pages/Admin';
import Recherche_liv from './components/pages/Recherche_liv';
import Recherche_mag from './components/pages/Recherche_mag';
import Ajout_Livreur from './components/pages/Ajout_Livreur';
import Ajout_Magasin from './components/pages/Ajout_Magasin';
import Import from './components/pages/Import';
import Export from './components/pages/Export';


function App() {
  return (
    <>
     <Router>
          <Route path='/' exact component={Home} />
          <Route path='/Connexion' exact component={Connexion} />
          <Route path='/Admin' exact component={Admin} />
          <Route path='/Recherche_liv' exact component={Recherche_liv} />
          <Route path='/Recherche_mag' exact component={Recherche_mag} />
          <Route path='/Ajout_Livreur' exact component={Ajout_Livreur} />
          <Route path='/Ajout_Magasin' exact component={Ajout_Magasin} />
          <Route path='/Import' exact component={Import} />
          <Route path='/Export' exact component={Export} />
     </Router>
    </>
  );
}

export default App;
