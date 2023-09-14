import React, { Component } from "react";
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
  constructor(props) {
    super(props);
    this.state={
        show: false,
        descripcion: props.datosPelicula.overview
      }
  }
  handleshow(){
    this.setState({
        show:!this.state.show
    })
} 

    render() {
      return (
      <React.Fragment>
        <section className= "recommended_series">
        {/* <Link to={`/detail/${this.props.datosPelicula.id}`}></Link> */}
          <article className="bloque-portada">
          <Link to={`/detail/${this.props.datosPelicula.id}`}><img  className= "portada" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" /></Link>
        <p className="texto-portada">{this.props.datosPelicula.title}</p>   {/* Titulo */}
        <p className="verMas">{this.state.show ? this.state.descripcion : ''} </p> {/* La descrip empieza oculta */}
        <p className="titulospeliculas" onClick={()=> this.handleshow()}>{this.state.show ? 'Ver menos' : 'Ver más'}</p>
        <p> <Link className="titulospeliculas2" to={`/detail/${this.props.datosPelicula.id}`}> Ir a detalle </Link> </p>
       </article> 
      </section>
      
      </React.Fragment>
    )
  }
}

export default PeliculaCard;







