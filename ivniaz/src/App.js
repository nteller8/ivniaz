import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favorites from './components/Favorites/Favorites';
import Detail from './screens/Detail/Detail'
import Home from './screens/Home/Home';
import NoEncontrada from './screens/NoEncontrada/NoEncontrada';
import SearchResults from './components/SearchResults.js/SearchResults';
import { Route, Switch } from 'react-router-dom';
import TodasCarte from "./screens/TodasCarte/TodasCarte";
import TodasPopu from "./screens/TodasPopu/TodasPopu";
import TodasPopuC from "./components/TodasPopuC/TodasPopuC";


function App() {
  return (
    <React.Fragment>

      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/searchresults/:searchresults" component={SearchResults} />
        <Route path="/todaspopu" component={TodasPopu} />
        <Route path="/todascarte" component={TodasCarte} />
        <Route path="" component={NoEncontrada} />
      </Switch>
      <Footer />

    </React.Fragment>
  );
}

export default App;


//actualizo
