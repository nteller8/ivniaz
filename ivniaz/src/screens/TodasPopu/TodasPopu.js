import React from "react";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import Filtro from "../../components/Filtro/Filtro";
import { Component } from "react";

class TodasPopu extends Component   {
  constructor(props){
    super(props)
    this.state={
      peliculasPop: [],  //aparecen peliculas populares
      page: 1,
      backup: []
    };
  }

  
  componentDidMount (){
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=${this.state.page}`)
  .then((res) => res.json())
  .then((data) =>
    this.setState({
      peliculasPop: data.results,
      backup: data.results,
   
    }))
  .catch(function (error) {
    console.log('el error fue: ' + error);
  });
  }


  filtrarPeliculas(textoInput) {
    let peliculasFiltradas = this.state.backup.filter((datosPelicula) => {
      return datosPelicula.title.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      peliculasPop: peliculasFiltradas,
      
    });
  }


  traerMas() {
    //Traer la siguiente página de personajes
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=${this.state.page}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasPop: this.state.peliculasPop.concat(data.results),
          page: this.state.page+1,
          backup: data.results,
        })
      )
      .catch(function(error){
        console.log('el error fue: ' + error);
      });
      }
      
  render (){
    console.log(this.setState.peliculasPop)
    return(
    <React.Fragment>
        <section className="main-index">
        <h2 className="titulo"> Todas las películas populares </h2>  
        <Filtro filtrarPeliculas={(texto) => this.filtrarPeliculas(texto)} />
        {this.state.peliculasPop.length >0?
              <section className="recommended_series">
                  {this.state.peliculasPop.map((unaPelicula, idx) => <PeliculaCard key={unaPelicula + idx} datosPelicula={unaPelicula} />
                  )
              }
          </section>:
          <h2> Loading...</h2>
      }
  </section>
      
    </React.Fragment>
    )
}
}
export default TodasPopu;

{/* ver todas
<Filtro filtrado={(texto) => this.filtrarPeliculas(texto)} />
            {
                this.state.peliculasPop.length >0?
            <section className="recommended_movies">
                {  
                    this.state.peliculasPop.map(
                        (unaPelicula,idx) => <PeliculaCard key={unaPelicula + idx} datosPeliculaculacula={unaPelicula}/>
                    )
                }
                <button  onClick={()=>this.traerMas(this.state.peliculasPop)} className="botonfavoritos" > Traer más </button>
            </section>:
            <h3> Espere un momento...</h3> 
            }
*/}
