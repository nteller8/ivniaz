import React from "react";
import {Link} from 'react-router-dom';
import {Component} from 'react';


class Buscador extends Component {
    constructor(props) {
        super(props);
            this.state = {
                valorInput: "",
                results: []
            };
        }
    compararBusqueda(inputValue) {

    }
    
    detenerDefault(evento){
        evento.preventDefault()
    }

    guardarInput(evento){
        this.setState(
            {valorInput: evento.target.value}
        );
    }

    guardarInput (evento){
        this.setState(
            {valorInput: evento.target.value},
            () => this.compararBusqueda(this.state.valorInput)
        );
    }

    render(){
        return(
            <React.Fragment>
            <section>
                <form onSubmit={(evento) => this.detenerSubmit(evento)}>
                    <input className= "search" type="text" placeholder="Buscar" onChange={(evento) => this.guardarInput(evento)} value={this.state.valorInput}/>
                    <Link className= "bottonsearch" to = {`/searchresults/${this.state.valorInput}`}>  <button className="bottonsearch" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>  </Link>
                </form>
            </section>
            
            </React.Fragment>
        );
    }
}
    export default Buscador;