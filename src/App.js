import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Connexion from './components/pages/Connexion';


function App() {
  return (
    <>
     <Router>
       <Navbar/>
          <Route path='/' exact component={Home} />
          <Route path='/Connexion' exact component={Connexion} />
     </Router>
    </>
  );
}

export default App;
