import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import AboutPage from './components/About/AboutPage';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route component={Home} exact path="/home" />
     	<Route component={Signin}  path="/signin" />
       <Route component={AboutPage} path='/about'/>
       <Route component={Clients} path='/clients'/>
       <Route component={Contact} path='/contact'/>
    </Switch>
    </div>
     </Router>
  );
}

export default App;
