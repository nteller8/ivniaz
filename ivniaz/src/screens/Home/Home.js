import React from "react";
import { Component } from "react";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      peliculasPop: [],  //aparecen peliculas populares
      peliculasCart: [], //aparecen peliculas en cartelera
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasPop: data.results,
        }))
      .catch(function (error) {
        console.log('el error fue: ' + error);
      });

      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=400f43d154bc968e0f7c02f3b9187c48')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasCart: data.results,
        }))
      .catch(function (error) {
        console.log('el error fue: ' + error);
      });
    }

  render() {
    return (
      <React.Fragment>
            <section className="main-index">
              <h2 className="titulo">Peliculas Populares</h2>    {/* DESPUES METEMOS LINK HACIA POPULARES */}
              <Link to='/todaspopu'>
            {/* ver todas */}
              <button className="boton">Ver todas</button> 
            </Link>
              {this.state.peliculasPop.length >0?
                    <section className="recommended_series">
                        {this.state.peliculasPop.slice(0, 5).map((unaPelicula, idx) => <PeliculaCard key={unaPelicula + idx} datosPelicula={unaPelicula} />
                        )
                    }
                </section>:
                <h2> Cargando...</h2>
            }
        </section>
          <section className="main-index">
               <h2 className="titulo">Peliculas en Cartelera</h2>  {/* DESPUES METEMOS LINK HACIA PELI CARTELERA */}
               <Link to={'/todascarte'}>
            {/* ver todas */}
              <button className="boton">Ver todas</button> 
            </Link>
               {this.state.peliculasCart.length >0?
                    <section className="recommended_movies">
                        {this.state.peliculasCart.slice(0, 5).map((unaPelicula, idx) => <PeliculaCard key={unaPelicula + idx} datosPelicula={unaPelicula} />
                        )
                    }
                </section>:
                <h2> Cargando...</h2>
            }
                
            </section>
            </React.Fragment>
    )
   }}

export default Home