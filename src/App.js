import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
     <Router>
       <Navbar/>
          <Route path='/' exact component={Home} />
          <Route path='/sign-in' component={SignIn} />
     </Router>
    </>
  );
}

export default App;
