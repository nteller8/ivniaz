import React from "react";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import Filtro from "../../components/Filtro/Filtro";
import { Component } from "react";

class TodasCarte extends Component {
  constructor() {
    super()
    this.state = {
      page: 1,
      peliculasCarte: [],  //aparecen peliculas en cartelera
      backup: []
    };
  }

  componentDidMount() {
    
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=${this.state.page}`) 
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        peliculasCarte: data.results,
        backup: data.results,
      })
    })
    .catch(function (error) {
      console.log('el error fue: ' + error);
    });
    console.log('hola')
  }


  filtrarPeliculas(textoInput) {
    let peliculasFiltradas = this.state.backup.filter((datosPelicula) => {
      return datosPelicula.title.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      peliculasCarte: peliculasFiltradas,
      
    });
  }


  traerMas() {
    //Traer la siguiente página de personajes
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=${this.state.page}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasCarte: this.state.peliculasCarte.concat(data.results),
          backup: data.results,
          page: this.state.page + 1,
        })
      )
      .catch(function (error) {
        console.log('el error fue: ' + error);
      });
  }

  render() {
    return (
      <React.Fragment>
        TODAS CARTE
         <h1 className="titulo"> Todas las peliculas en cartelera</h1>
            <Filtro filtrarPeliculas={(texto) => this.filtrarPeliculas(texto)} />
            {
                this.state.peliculasCarte.length >0?
            <section className="recommended_series">
                {
                    this.state.peliculasCarte.map(
                        (unaPelicula,idx) => <PeliculaCard key={unaPelicula + idx} datosPelicula={unaPelicula}/>
                    )
                }
            </section>:
            <h3>Loading...</h3>
            }
            
            <button onClick={() => this.traerMas(this.state.peliculasCarte)}> Traer más </button>
            */
      </React.Fragment>
    )
  }
}
export default TodasCarte;
