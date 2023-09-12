import React from "react";
import {Component} from 'react';
import {Link} from "react-router-dom";
import Buscador from "../Buscador/Buscador";
import PeliculaCard from '../PeliculaCard/PeliculaCard'

class Peliculas extends Component {
  constructor(props){
    super(props)
    this.state={
      peliculas: [],
      nextUrl: '',
      peliculasFavoritas: [], 
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          populares: data.results,
        }))
      .catch(function (error) {
        console.log('el error fue: ' + error);
      });

      fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          encartel: data.results,
        }))
      .catch(function (error) {
        console.log('el error fue: ' + error);
      });
    }

    //BORRAR
    borrar(id) {
      let peliculasFiltradas = this.state.peliculas.filter(
        (unaPelicula) => unaPelicula.id !== id);
      this.setState({
        peliculas: peliculasFiltradas,});
    }

    //VERMAS EN CLASE LO VIMOS COMO TRAERMAS
    verMas() {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then(data => this.setState({
        populares: data.results.concat(this.state.populares),
        peliculasFiltradas: data.results.concat(this.state.peliculasFiltradas)
      }))
    }

    filtrarPeliculas(textoInput){
      let peliculasFiltradas = this.state.peliculas.filter((pelicula)=> {
        return pelicula.name.toLowerCase().includes(textoInput.toLowerCase());
      });
      this.setState({
        peliculas: peliculasFiltradas
      })
    }

   render(){
    return(
      <React.Fragment>
        <h2 className="Titulo"> Películas Populares </h2>
        <button onClick={() => this.verMas()}> Ver más películas populares</button>
        <section className="card-container">
          {this.state.peliculas.map((unaPelicula, idx) => <PeliculaCard 
          key={unaPelicula + idx} 
          datosPelicula={unaPelicula} 
          borrar={(id) => this.borrar(id)}
          verMas={(id) => this.verMas(id)}
          //ver todas ?
          />)}
          </section> 
      </React.Fragment>
      
    )}
  }
   
   export default Peliculas;
