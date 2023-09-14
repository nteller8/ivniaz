import React from 'react';
import { Component } from 'react';

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textoFavoritos: "Agregar a favoritos",
        }
    }

    componentDidMount() {
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null) {
            let favoritos = JSON.parse(recuperoStorage);

            if (favoritos.includes(this.props.peliculasDetalle.id)) {
                this.setState({
                    textoFavoritos: "Quitar de favoritos"
                })
            }

        }
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
                <section className="bloquedetail">
                    <article className="bloque-portada">
                        <img className="portadadetail" src={`https://image.tmdb.org/t/p/w500${this.props.peliculasDetalle.poster_path}`} alt='img' /> {/* foto de portada */}
                        </article>
                        <article className="">
                        <h1 className="titulo">{this.props.peliculasDetalle.title}</h1> {/* nombre pelicula */}
                        <p className="estreno"> Fecha de estreno: {this.props.peliculasDetalle.release_date}</p> {/* fecha d estreno */}
                        <p className="sinopsis"> Raiting: {this.props.peliculasDetalle.vote_average}</p> {/* raiting */}
                        <p className="sinopsis"> Duración: {this.props.peliculasDetalle.runtime}</p> {/* duracion */}
                        <p className="sinopsis"> Sinopsis: {this.props.peliculasDetalle.overview}</p> {/* sinopsis */}
                        <p className="sinopsis"> Géneros: {this.props.generosPelicula.join(" ")}</p> {/* generos */}
                      
                        <div className='fav'> <button className="botonfavoritos" onClick={() => this.agregarYQuitarDeFavoritos(this.props.peliculasDetalle.id)}>{this.state.textoFavoritos}</button></div>   {/* boton favoritos */}
                        </article>
                   
                </section>
            </React.Fragment>
        )
    }
}




export default Detalle