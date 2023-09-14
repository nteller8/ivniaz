import React, { Component } from "react";
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
  constructor(props) {
    super(props);
    this.state={
        show: false,
        descripcion: props.datosPelicula.overview
        //datosPelicula no está definido, hay que ver de donde viene ¿?
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
        <p className="bottonsearch" onClick={()=> this.handleshow()}>{this.state.show ? 'Ver menos' : 'Ver más'}</p>
        <p> <Link className="hipervinculo" to={`/detail/${this.props.datosPelicula.id}`}> Detalle de película</Link> </p>
       </article> 
      </section>
      
      </React.Fragment>
    )
  }
}

export default PeliculaCard;







