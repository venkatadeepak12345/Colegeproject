import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import Header from './Components/HIT/Header';
import Table from './Components/HIT/Table';
import About from './Components/HIT/About';
import "./Components/HIT/style.css";
import Routing from './Components/HIT/Routing';
import Footer from './Components/HIT/Footer';
import Branches from './Components/Branches';
import Props from './Components/Props';


function App() {
  return (
    <div>
      <Header/>
      <Routing/>
      <Footer/>
      
      
      
      
    </div>
  );
}

export default App;
