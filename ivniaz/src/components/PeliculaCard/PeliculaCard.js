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
        arrayPeliculasFav.push(id);
        this.setState({
          textoFavoritos: "Quitar de favoritos",
        });
      }

      let stringDeFavoritos = JSON.stringify(arrayPeliculasFav);
      localStorage.setItem("favoritos", stringDeFavoritos);

    }




  }
  render() {
    return (
      <React.Fragment>

        <article className="peliculas_populares">
          <h3>{this.props.datosPelicula.title}</h3>
          <Link to={`/peliculas/${this.props.datosPelicula.id}`}> {/* chequear si no faltan : */}
            <img className="imagenPP" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" />
          </Link>

          <Link to={`/peliculas/${this.props.datosPelicula.id}`}>

            <p className="UnaPelicula">
              Ver más
            </p>
          </Link>
          <p className="UnaPelicula" onClick={() => this.props.borrar(this.props.datosPelicula.id)}>
            Borrar
          </p> {/* chequear q onda esto */}


          <button className="UnaPelicula" onClick={() => this.add_remove_favs(this.props.datosPelicula.id)}>
            {this.state.textoFavoritos}
          </button>
        </article>


      </React.Fragment>
    )
  }
}

export default PeliculaCard;
