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

agregarYQuitarDeFavoritos(id) {
  let favoritos = [];
  let recuperoStorage = localStorage.getItem('favoritos');
  if (recuperoStorage !== null) {
      favoritos = JSON.parse(recuperoStorage);
  }
  if (favoritos.includes(id)) {
      favoritos = favoritos.filter(unId => unId !== id)
      this.setState({
          textoFavoritos: "Agregar a favoritos"
      })
  } else {
      favoritos.push(id);
      this.setState({
          textoFavoritos: "Quitar de favoritos",

      })
  }
  let favoritosToString = JSON.stringify(favoritos);
  localStorage.setItem('favoritos', favoritosToString);
  console.log(favoritos)
}

    render() {
      return (
      <React.Fragment>
      
        {/* <Link to={`/detail/${this.props.datosPelicula.id}`}></Link> */}
          <article className="bloque-portada">
          <Link to={`/detail/${this.props.datosPelicula.id}`}><img  className= "portada" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" /></Link>
        <p className="texto-portada">{this.props.datosPelicula.title}</p>   {/* Titulo */}
        <p className="verMas">{this.state.show ? this.state.descripcion : ''} </p> {/* La descrip empieza oculta */}
        <p className="verMas" onClick={()=> this.handleshow()}>{this.state.show ? 'Ver menos' : 'Ver más'}</p>
        <p> <Link className="titulospeliculas" to={`/detail/${this.props.datosPelicula.id}`}> Detalle de película</Link> </p>
        <div className='fav'> <button className="botonfavoritos" onClick={() => this.agregarYQuitarDeFavoritos(this.props.peliculasDetalle.id)}>{this.state.textoFavoritos}</button></div>   {/* boton favoritos */}
       </article> 
 
      
      </React.Fragment>
    )
  }
}

export default PeliculaCard;