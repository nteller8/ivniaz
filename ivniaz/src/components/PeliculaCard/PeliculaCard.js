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
    let peliculasTraidas = localStorage.getItem(""); //COMPLETAR (aca decia personaje)
    if (peliculasTraidas === null) {
      this.setState({
        textoFavoritos: "Agregar a favoritos",
      });
    } else if (peliculasTraidas.includes(this.props.datosPelicula.id)) {
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }
  }

  agregarQuitarFavoritos() {
    let arrayPeliculas = [this.props.datosPelicula.id];
    let peliculasTraidas = localStorage.getItem(""); //completar
    let peliculasFinales = "";

    if (peliculasTraidas === null) {
        peliculasTraidas = [];
      peliculasFinales = JSON.stringify(arrayPeliculas);
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }

    let arrayPeliculasFinales = "";

    if (peliculasTraidas.length !== 0) {
      let arraypeliculasTraidas = JSON.parse(peliculasTraidas);
      arrayPeliculasFinales = arraypeliculasTraidas.concat(arrayPeliculas);
      peliculasFinales = JSON.stringify(arrayPeliculasFinales);
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }

    if (peliculasTraidas.includes(this.props.datosPelicula.id)) {
      let arraypeliculasTraidas = JSON.parse(peliculasTraidas);
      arrayPeliculasFinales = arraypeliculasTraidas.filter(
        (item) => item !== this.props.datosPelicula.id
      );
      peliculasFinales = JSON.stringify(arrayPeliculasFinales);
      this.setState({
        textoFavoritos: "Agregar a favoritos",
      });
    }

    localStorage.setItem("pelicula", peliculasFinales);
  }

  render() {
    return (
      <article className="character-card">
        <Link to={`/peliculas/${this.props.datosPelicula.id}`}>
          <img src={this.props.datosPelicula.image} alt="" />
        </Link>
        <h2>{this.props.datosPelicula.name}</h2>
        {/* Nombre */}
        <p>{this.props.datosPelicula.status}</p> {/* Estado */}
        <p>{this.props.datosPelicula.species}</p> {/* Especie */} //cambiar ESPECIE!!!
        <p className="more">Ver más</p>
        <section className="extra">
          <p>Origen: {this.props.datosPelicula.origin.name}</p>
        </section>
        <p
          className="delete"
          onClick={() => this.props.borrar(this.props.datosPelicula.id)}
        >
          Borrar
        </p>
        <button onClick={() => this.agregarQuitarFavoritos()}>
          {this.state.textoFavoritos}
        </button>
      </article>
    );
  }
}

export default PeliculaCard;
