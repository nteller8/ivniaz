import React from "react";
import { Component } from "react";
import Buscador from '../../components/Buscador/Buscador';
import Peliculas from "../../components/Peliculas/Peliculas";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



//import Header from "../../components/Header/Header";
//import Footer from '../../components/Footer/Footer'



class Home extends Component {
  constructor() {
    super();
    this.state = {
      pelispopulares: [],
      pelisencartel: [],
    };
  }
//peliculas populares
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelispopulares: data.results,
        }))
      .catch(function (error) {
        console.log('el error fue: ' + error);
      });

      //VER TODAS
      //VER MAS

      
      //IR A DETALLE
      //AGREGAR/ QUITAR DE FAV 

    //nuevos lanzamientos
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelisencartel: data.results,
        })
      )
      .catch(function (error) {
        console.log('el error fue: ' + error);
      })

      

  };

  render() {
    return (
            <section className="container">
              <h2 className='titulo'>Peliculas Populares</h2>
              <div className="peliculas_populares">
                {this.state.pelispopulares.slice(0, 6).map((pelicula, idx) => <Peliculas key={Peliculas + idx} datosPelicula={pelicula} />)}
                
              </div>
               <h2 className='titulo'>Peliculas en Cartelera</h2>

               {/* <div className="peliculas_toprated">
               {this.state.pelispopulares.slice(0, 6).map((pelicula, idx) => <Detail key={pelicula + idx} datostr={Detail} />)}
              </div> */}
            </section>)
   }}
  

export default Home