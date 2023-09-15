import React, { Component } from 'react';
import Detalle from "../../components/Detalle/Detalle";

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculasDetalle: [],
      generosPelicula:[]
    }
  }

 
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=400f43d154bc968e0f7c02f3b9187c48`)
      .then(res => res.json())
      .then(data => this.setState({
        peliculasDetalle: data,
        generosPelicula: data.genres.map(genre => genre.name)
      }))
      .catch()

  };


  render() {
    return(
      <React.Fragment>
        <Detalle peliculasDetalle={this.state.peliculasDetalle} generosPelicula={this.state.generosPelicula}/>
        <h3 className="loading">Loading...</h3>
      </React.Fragment>
    )

  }

}


export default Detail