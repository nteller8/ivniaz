import React from "react";
import { Component } from "react";
import Buscador from '../../components/Buscador/Buscador'
import Peliculas from "../../components/Peliculas/Peliculas"
import PeliCartelera from '../../components/PeliCartelera/PeliCartelera'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../../../public/css/styles'


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

    //nuevos lanzamientos
    fetch('https://api.themoviedb.org/3/movie/top_ratedapi_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelisencartel: data.results,
        })
      )
      .catch(function (error) {
        console.log('el error fue: ' + error);
      })

  }

  render() {
    return (
      <React.Fragment>
        {

          this.state.pelispopulares.length !== 0 ?
            <section className="container">
              {/* scroll!!! */}
              <article className="peliculas_populares">
                <h2 className='titulo'>Peliculas Populares</h2>
                <div className='peliculas_populares'>
                  {this.state.pelispopulares.slice(0, 6).map((pelicula, idx) => <Pelis key={Peliculas + idx} datosPelicula={pelicula} />)}
                </div>
              </article>
            </section> :
  
  

          this.state.pelisencartel.length > 0 ?
            <section className="peliculas_toprated">
              <h2 className='titulo'>Peliculas en Cartelera</h2>
              <div className='peliculas_toprated'>
                {this.state.pelispopulares.slice(0, 6).map((pelicula, idx) => <PeliCartelera key={peliculatr + idx} datostr={PeliCartelera} />)}
              </div>  
            </section>:}
    </React.Fragment>)
  }}


export default Home;