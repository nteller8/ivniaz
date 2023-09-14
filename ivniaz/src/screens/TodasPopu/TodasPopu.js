import React from "react";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import Buscador from "../../components/Buscador/Buscador";
import { Component } from "react";

class TodasPopu extends Component   {
  constructor(props){
    super(props)
    this.state={
      peliculasPop: [],  //aparecen peliculas populares
      page: 1,
    };
  }

  componenDidMount (){
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
  .then((res) => res.json())
  .then((data) =>
    this.setState({
      peliculasPop: data.results,
      peliculasPopF: data.results,
      page: this.state.page+1,
    }))
  .catch(function (error) {
    console.log('el error fue: ' + error);
  });
  }


  filtrarPeliculas(textoInput) {
    let peliculasFiltradas = this.state.peliculasPop.filter((datosPeli) => {
      return datosPeli.title.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      peliculasPopF: peliculasFiltradas,
    });
  }


  traerMas() {
    //Traer la siguiente página de personajes
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasPopF: this.state.peliculasPopF.concat(data.results),
          page: this.state.page+1,
        })
      )
      .catch();
      }
      
        return (){
          <React.Fragment>
             <h1 style={{color: "white"}}> Todas las peliculas populares</h1>
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
export default TodasPopu;
