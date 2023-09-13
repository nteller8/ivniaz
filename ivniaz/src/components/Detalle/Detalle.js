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
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.detallePelicula.id)){
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

    }

    
    render(){
        return(
            <React.Fragment>
           <article className="bloquedetail">
           <img className="portadadetail" src={`https://image.tmdb.org/t/p/w500${this.props.detallePelicula.poster_path}`}alt='img'/> {/* foto de portada */}
           <h1 className= "titulospeliculas">{this.props.detallePelicula.title}</h1> {/* nombre pelicula */}
           <section className="bloquedetail"> 
            <p className= "fecha-portada"> Raiting: {this.props.detallePelicula.vote_average}</p> {/* raiting */}
            <p className= "fecha-portada"> Fecha de estreno: {this.props.detallePelicula.release_date}</p> {/* fecha d estreno */}
            <p className= "fecha-portada"> Duración: {this.props.detallePelicula.runtime}</p> {/* foto de portada */}
            <p className= "fecha-portada"> Sinopsis: {this.props.detallePelicula.overview}</p>
            <p className= "fecha-portada"> Género: {this.props.detallePelicula.genres.map(function(genero){return genero.name})}</p>
            <button className="botonfavoritos" onClick={()=>this.agregarYQuitarDeFavoritos(this.props.detallePelicula.id)}>{this.state.textoFavoritos}</button>
            </section>
           </article>
           </React.Fragment>
        )
    }}




export default Detalle