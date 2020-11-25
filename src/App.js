import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Connexion from './components/pages/Connexion';
import Admin from './components/pages/Admin';


function App() {
  return (
    <>
     <Router>
       <Navbar/>
          <Route path='/' exact component={Home} />
          <Route path='/Connexion' exact component={Connexion} />
          <Route path='/Admin' exact component={Admin} />
     </Router>
    </>
  );
}

export default App;
