import React, { Component } from 'react'; 
import axios from 'axios';
import { Link, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Retro from './components/Retro';
import Mirrorless from './components/Mirrorless';
import ProdukDetail from './components/ProdukDetail';
import katalog from './produk/Men.json';
import '../src/styles/Header.css'


class App extends Component {
  render() {
    return (
    <div >
<Header/>  
    
  
<Route path = "/" component = {"Home"}/>
<Route path = "/Slider" component = {Slider}/>
<Route path = "/Retro" component = {Retro}/>
<Route path = "/Mirrorless" component = {Mirrorless}/>
<Route path = "/ProdukDetail" component = {ProdukDetail}/>


<Slider/>
        
<Footer />
</div>      
      //  Composition
    )
  }
}


export default App; // export harus ada untuk export modul,
