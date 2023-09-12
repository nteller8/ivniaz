import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from './screens/AboutUs/AboutUs';
import Favorites from './screens/Favorites/Favorites';
import Home from './screens/Home/Home';
import NoEncontrada from './screens/NoEncontrada/NoEncontrada';
import Peliculas from './screens/VerTodas/VerTodas';
import UnaPelicula from './screens/UnaPelicula/UnaPelicula';
import PeliCartelera from './screens/PeliCartelera/PeliCartelera'; 
import SearchResults from './screens/SearchResults/SearchResults';
import Loader from './screens/Loader/Loader';
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
        <Route path="/favorites" component={Favorites}/> 
        <Route path="/pelicartelera" exact={true} component={PeliCartelera}/> 
        <Route path="/searchresults/:searchresults" component={SearchResults}/>
       <Route path="*" component={NoEncontrada}/>
      </Switch>
      <Footer/>
  
    </React.Fragment>
  );
}

export default App;
