import React from "react";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import Buscador from "../../components/Buscador/Buscador";
import { Component } from "react";

class TodasCarte extends Component   {
  constructor(props){
    super(props)
    this.state={
      peliculasCar: [],  //aparecen peliculas en cartelera
      page: 1,
    };
  }

  componenDidMount (){
  fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=400f43d154bc968e0f7c02f3b9187c48') 
  .then((res) => res.json())
  .then((data) =>
    this.setState({
      peliculasCar: data.results,
      peliculasCarF: data.results,
      page: this.state.page+1,
    }))
  .catch(function (error) {
    console.log('el error fue: ' + error);
  });
  }


  filtrarPeliculas(textoInput) {
    let peliculasFiltradas = this.state.peliculasCar.filter((datosPeli) => {
      return datosPeli.title.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      peliculasCarF: peliculasFiltradas,
    });
  }


  traerMas() {
    //Traer la siguiente página de personajes
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasCarF: this.state.peliculasCarF.concat(data.results),
          page: this.state.page+1,
        })
      )
      .catch();
      }
      
        return (){
          <React.Fragment>
             <h1 style={{color: "white"}}> Todas las peliculas en cartelera</h1>
            <Buscador filtrado={(texto) => this.filtrarPeliculas(texto)} />
            <button onClick={() => this.traerMas()}> Traer más </button>
            <section className="main-indexr">
             {/*  {this.state.peliculasPop.map((unPersonaje, idx) => (
                <CharacterCard
                  key={unPersonaje.name + idx}
                  datosPersonaje={unPersonaje}
                  borrar={(id) => this.borrar(id)}
                />
              ))} */}
            </section>
          </React.Fragment>
        ;
      }
    }
export default TodasCarte;
