import React from "react";
import { Component } from "react";
import Peliculas from "../../components/Peliculas/Peliculas";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';




class Home extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      
    };
  }

    
  render() {
    return (
      <React.Fragment>
            <section className="main-index">
              <h2 className="titulo">Peliculas Populares</h2>
         
                <Peliculas></Peliculas>
       
              
               <h2 className="titulo">Peliculas en Cartelera</h2>
               
              
                <Peliculas></Peliculas>
          
               {/* <div className="peliculas_toprated">
               {this.state.pelispopulares.slice(0, 6).map((pelicula, idx) => <Detail key={pelicula + idx} datostr={Detail} />)}
              </div> */}
            </section>
            </React.Fragment>
    )
   }}
  

export default Home