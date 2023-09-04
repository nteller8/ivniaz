import React from "react";
import { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class UnaPelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: {},
    };
  }

  componentDidMount() {
    //BUscamos datos CAMBIAR FETCH!!!!!
    fetch(
      `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelicula: data,
        })
      )
      .catch();
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state.pelicula);
    return (
      <React.Fragment>
        <Header />
        <img src={this.state.pelicula.image} alt="y" />
        <h1>{this.state.pelicula.name}</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default UnaPelicula;
