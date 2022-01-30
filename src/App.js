import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Sercives';
import  About from './pages/About';
import  Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router,Route,} from "react-router-dom";

const App =()=> {
  return (
    < >
    <Router >
    <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/servce" component={Services} />
      </Router>
</>
  );
}

export default App;
