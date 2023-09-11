import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom/cjs/react-router-dom.min'
import Peliculas from "../../components/Peliculas/Peliculas"
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'



class Home extends Component {
  constructor() {
    super();
    this.state = {
      pelispopulares: [],
      pelisencartel: [],
  };
}

  componentDidMount() {
    //BUscamos datos
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    ) //chequear si esta bien la api
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelisencartel: data,
        })
      )
      .catch();

      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'`
      ) //chequear si esta bien la api
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            pelispopulares: data,
          })
        )
        .catch();
      
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
    );
  }
}

export default Home;