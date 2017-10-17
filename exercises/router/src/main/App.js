import React from 'react';
import Navbar from './Navbar';
import Home from "./views/Home";
import {Switch, Route} from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./Footer";
import ServicesContainer from "./views/services/Container";

function App (){
  return (
    <div className="app-wrapper">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={ServicesContainer}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
    </div>
  )
}

export default App;
