import React from 'react';
import {Component} from 'react'; 

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
           textoFavoritos: "Agregar a Favoritos",
        }
    }

    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            if(favoritos.includes(this.props.peliculasDetalle.id)){
                this.setState({
                    textoFavoritos: "Quitar de favoritos"
                })
            }

        }
    }

    agregarYQuitarDeFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        }
        if(favoritos.includes(id)){
            favoritos = favoritos.filter( unId => unId !== id)
            this.setState({
                textoFavoritos : "Agregar a favoritos"
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

    
    render(){
        return(
            <React.Fragment>
           <article className="bloquedetail">
           <img className="portadadetail" src={`https://image.tmdb.org/t/p/w500${this.props.peliculasDetalle.poster_path}`}alt='img'/> {/* foto de portada */}
           <h1 className= "titulospeliculas">{this.props.peliculasDetalle.title}</h1> {/* nombre pelicula */}
           <section className=""> 
            <p className= "fecha-portada"> Raiting: {this.props.peliculasDetalle.vote_average}</p> {/* raiting */}
            <p className= "fecha-portada"> Fecha de estreno: {this.props.peliculasDetalle.release_date}</p> {/* fecha d estreno */}
            <p className= "fecha-portada"> Duración: {this.props.peliculasDetalle.runtime}</p> {/* foto de portada */}
            <p className= "fecha-portada"> Sinopsis: {this.props.peliculasDetalle.overview}</p>
            <p className= "fecha-portada"> Géneros: {this.props.generosPelicula.join(" ")}</p>
           {/* FALTA GENEROS */}

            <button className="botonfavoritos" onClick={()=>this.agregarYQuitarDeFavoritos(this.props.peliculasDetalle.id)}>{this.state.textoFavoritos}</button>
            </section>
           </article>
           </React.Fragment>
        )
    }}




export default Detalle