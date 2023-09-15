import React from "react";
import {Link} from 'react-router-dom';
import {Component} from 'react';

class Buscador extends Component {
    constructor(props) {
        super(props);
            this.state = {textoDelInput: ''
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        })
        return true
    }

    render(){
        return(
              <div className="formDeBusqueda">
              <form className="busqueda"  method="GET" onSubmit={(event) => this.controlarEnvio(event)}>
                  <input  className="search" type="text" name="Search" placeholder="¿Qué queres ver?" onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoDelInput}/> 
                  <Link to ={`/searchresults/${this.state.textoDelInput}`}> <button className="bottonsearch" type="submit">Search</button> </Link>
              </form>
          </div>
        )
    }

}

export default Buscador