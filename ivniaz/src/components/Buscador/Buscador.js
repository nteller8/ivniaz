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
            ()=> this.props.filtro(this.state.valorInput)
        );
    }

    render(){
        return(
            <React.Fragment>
            <section>
                <form onSubmit={(evento) => this.detenerSubmit(evento)}>
                    <input type="text" placeholder="Buscar" onChange={(evento) =>this.guardarInput(evento)} value={this.state.valorInput}/>
                    <Link to = {`/searchresults/${this.state.valorInput}`}>Buscar</Link>
                </form>
            </section>
            
            </React.Fragment>
        );
    }
}
    export default Buscador;