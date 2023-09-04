import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from './screens/AboutUs/AboutUs';
import Favorites from './screens/Favorites/Favorites';
import Home from './screens/Home/Home';
import NoEncontrada from './screens/NoEncontrada/NoEncontrada';
import Peliculas from './screens/Peliculas/Peliculas';
import UnaPelicula from './screens/UnaPelicula/UnaPelicula';
import Series from './screens/Series/Series';
import UnaSerie from './screens/UnaSerie/UnaSerie';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/aboutus"  component={AboutUs}/>
        <Route path="/peliculas" exact={true} component={Peliculas}/>
        <Route path="/peliculas/:id"  component={UnaPelicula}/>
        <Route path="/series" exact={true} component={Series}/>
        <Route path="/series/:id"  component={UnaSerie}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="" component={NoEncontrada}/>
      </Switch>
     <Peliculas/>
      
     
      <Footer/>
  
    </React.Fragment>
  );
}

export default App;
