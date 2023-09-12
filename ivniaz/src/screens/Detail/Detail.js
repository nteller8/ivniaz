import React, { Component } from 'react';
import Detalle from "../../components/Detalle/Detalle";

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculas: []
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=400f43d154bc968e0f7c02f3b9187c48`)
      .then(res => res.json())
      .then(data => this.setState({
        peliculas: data,
      }))
      .catch()

  };


  render() {
    return(
      <React.Fragment>
        {this.state.peliculas.map((unDetail, idx) => <Detalle key={unDetail + idx} datosDetail = {unDetail}/>)}

      </React.Fragment>
    )

  }

}

export default Detail