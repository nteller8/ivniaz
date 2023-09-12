import React, { Component } from "react";
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFavoritos: "Agregar a favoritos",
      textoDescripcion: "Ver Descripción",
    };
  }

  componentDidMount() {
    let peliculasTraidas = localStorage.getItem("pelicula");
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
    let peliculasTraidas = localStorage.getItem("pelicula");
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
      let arrayPeliculasTraidas = JSON.parse(peliculasTraidas);
      arrayPeliculasFinales = arrayPeliculasTraidas.concat(arrayPeliculas);
      peliculasFinales = JSON.stringify(arrayPeliculasFinales);
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }

    if (peliculasTraidas.includes(this.props.datosPelicula.id)) {
      let arrayPeliculasTraidas = JSON.parse(peliculasTraidas);
      arrayPeliculasFinales = arrayPeliculasTraidas.filter(
        (item) => item !== this.props.datosPelicula.id
      );
      peliculasFinales = JSON.stringify(arrayPeliculasFinales);
      this.setState({
        textoFavoritos: "Agregar a favoritos",
      });
    }

    localStorage.setItem("pelicula", peliculasFinales);
  }

  VerDescripcion(){
    if(this.state.description === false){
        this.setState({
            description:true,
            textoDescripcion:"Ocultar descripción"
        })
    }
    else{
        this.setState({
            botondescripcion:false,
            textoDescripcion:"Ver descripción"
        })
    }
}

  render() {
    return (
      <React.Fragment>
        <section className= "recommended_series">
        <Link to={`/detail/${this.props.datosPelicula.id}`}></Link>
          <article className="bloque-portada">
       <img  className= "portada" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" />
        {this.state.botondescripcion ?
                  <section>
                    <p className="sinopsis"> Descripción: {this.props.datosPelicula.overview}</p>
                  </section>
              : false}
       
        <p className="texto-portada">{this.props.datosPelicula.title}</p>{/* Titulo */}
         <p className="boton" onClick={() => this.props.button(this.props.datosPelicula.id)}>Ver más</p> {/* La descrip tiene que empezar oculta */}
        <h2> <Link className="link" to={`/detail/${this.props.datosPelicula.id}`}> Detalle de película</Link> </h2>
        <p className="boton" onClick={() => this.props.borrar(this.props.datosPelicula.id)}>Borrar</p>
        <button onClick={() => this.agregarQuitarFavoritos()}>
          {this.state.textoFavoritos}
        </button></article> 
      </section>
      {/* FALTA VER MAS/VER MENOS */}
      </React.Fragment>
    )
  }
}

export default PeliculaCard;
