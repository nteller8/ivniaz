import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Favs extends Component {
    constructor(props) {
        super(props);
    this.state = {
        description: false,
        texto: 'description',
        favorites: []}
};

showdescrption(){
    if(this.state.description === false){//se ponen tres o dos =?
        this.setState({
            description: true,
            texto: 'no mostrar'
    })
    } 
    else {
        this.setState({
            description: false,
            texto:'description'
        })
    }
};
 
//TERMINAR RENDER!!
render(){
    return (
        <article> //AGREGAR CLASS NAME
        <div> //AGREGAR CLASS NAME
        </div>
        </article>
    )}
}

export default Favs;