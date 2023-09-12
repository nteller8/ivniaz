import React from 'react';
import {Component} from 'react'; 

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
 /*    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }
        if(favoritos.includes(this.props.datosDetalle.id)){
            this.setState({
                textoFavoritos: 'Quitar de favoritos'
            })
        }

    }
 */
   /*  agregarYQuitarDeFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }
        if(favoritos.includes(id)){ 
            favoritos = favoritos.filter(unId => unId !== id);
            this.setState({
                textoFavoritos: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            this.setState({
                textoFavoritos: 'Quitar de favoritos'
            })
        }

        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString); */

    
    render(){
        return(
           <article className="detalle-card">
               <h1 className= "titulo1">{this.props.datosDetalle.title}</h1> {/* nombre pelicula */}
               <img className="imagen-detalle" src={`https://image.tmdb.org/t/p/w342/${this.props.datosDetalle.poster_path}`} alt='img'/> {/* foto de portada */}
             <section className="info-detalle"> 
               <h1 className= "titulo2"> Raiting: {this.props.datosDetalle.vote_average}</h1> {/* calificacion */}
               <h1 className= "titulo2"> Fecha de estreno: {this.props.datosDetalle.release_date}</h1> {/* fecha d estreno */}
               <h1 className= "titulo2"> Duración: {this.props.datosDetalle.runtime}</h1> {/* foto de portada */}
               <h1 className= "titulo2"> Género: {this.props.datosDetalle.genres.map(function(genero){return genero.name})}</h1>
               <p className= "titulo3"> {this.props.datosDetalle.overview}</p>
               <p className="boton-detalle" onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosDetalle.id)}>{this.state.textoFavoritos}</p>
               </section>
           </article>


        )
    }}




export default Detalle