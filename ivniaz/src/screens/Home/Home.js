import React from "react";
import { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'



class Home extends Component {
  constructor() {
    super();
    this.state = {
      pelispopulares: [],
      pelisencartel: [],
  };
}

  componentDidMount() {
    //BUscamos datos
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    ) //chequear si esta bien la api
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelisencartel: data,
        })
      )
      .catch();

      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'`
      ) //chequear si esta bien la api
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            pelispopulares: data,
          })
        )
        .catch();
      
  }
  
  render() {
    return (
      <React.Fragment>
     
        {/* aca va el section de peliculas populares */}
        <h2 className = "titulo_ppl">Peliculas populares</h2>
        {/* aca va el section de peliculas en cartelera */}
        <h2 className = "titulo_ppl">Peliculas en cartelera</h2>


        

      </React.Fragment>
    );
  }
}

export default Home;