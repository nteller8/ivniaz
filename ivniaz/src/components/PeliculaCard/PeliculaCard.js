import React, { Component } from "react";
import "./PeliculaCard.css";
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFavoritos: "Agregar a favoritos",
    };
  }

  componentDidMount() {
    let recuperoStorage = localStorage.getItem("favoritos"); 
    if (recuperoStorage === null) {
      this.setState({
        textoFavoritos: "Agregar a favoritos",  //chequear esto
      });
    } else if (recuperoStorage.includes(this.props.datosPelicula.id)) {
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }
  }

  add_remove_favs(id) {
    let arrayPeliculasFav = [];
    let recuperoStorage = localStorage.getItem("favoritos"); 
    
    if (recuperoStorage !== null) {
        arrayPeliculasFav = JSON.parse(recuperoStorage);
      
    if (recuperoStorage.includes(id)) { //chequear si no es solo id
      arrayPeliculasFav = arrayPeliculasFav.filter(peli_id => peli_id !== id)
      this.setState({
        textoFavoritos: "Agregar de favoritos",
      });
    }

    else {
      arrayPeliculasFav.push (id);
      this.setState ({
        textoFavoritos: "Quitar de favoritos",
      });
    }

    let stringDeFavoritos = JSON.stringify(arrayPeliculasFav);
    localStorage.setItem("favoritos", stringDeFavoritos );

  }

  
  render() {
    return (
      <React.Fragment>
          <h2 class = "titulo_ppl">Peliculas populares</h2>

          <section class="peliculas_populares"></section>



          <h2 class = "titulo_ppl"> Series populares</h2>
          <section class = "series_populares" ></section>




</React.Fragment>
    )
  
  }

export default PeliculaCard;
