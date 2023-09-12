import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from './screens/AboutUs/AboutUs';
import Favorites from './screens/Favorites/Favorites';
import Detail from './screens/Detail/Detail'
import Home from './screens/Home/Home';
import NoEncontrada from './screens/NoEncontrada/NoEncontrada';
import Peliculas from './screens/VerTodas/VerTodas';
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
        <Route path="/favorites" component={Favorites}/> 
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/searchresults/:searchresults" component={SearchResults}/>
       <Route path="*" component={NoEncontrada}/>
      </Switch>
      <Footer/>
  
    </React.Fragment>
  );
}

export default App;
