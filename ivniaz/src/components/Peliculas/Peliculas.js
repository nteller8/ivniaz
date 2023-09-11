import React from "react";
import {Link} from "react-router-dom";


class Peliculas extends Component {
  constructor(props){
    super(props)
    this.state={
      view:false,
      texto_boton: "Agregar a favoritos"
    }
  }

  mostrar = () => {
    this.setState({view: !this.state.view});
  };

  componentDidMount(){
    let recuperoStorage = localStorage.getItem ("favoritos");
    
    if (recuperoStorage !== null) {
        let favoritos = JSON.parse (recuperoStorage);

        if (favoritos.includes (this.props.datosPeli.id)){
            this.setState ({
                texto_boton: "Quitar de favoritos"
            })
          }}}
    
    add_remove_favs (id){
      let favoritos = [];
      let recuperoStorage = localStorage.getItem ("favoritos");

      if (recuperoStorage !== null) {  
          favoritos = JSON.parse(recuperoStorage);
      }

      if (favoritos.includes (id)){ 
          favoritos = favoritos.filter (peli_id => peli_id !== id )
          this.setState ({
              texto_boton: "Agregar a favoritos"
          })

       } else {
          favoritos.push (id);
          this.setState ({
              texto_boton: "Quitar de favoritos",
          })
       }


      let favoritostoString= JSON.stringify(favoritos);
      localStorage.setItem ("favoritos", favoritostoString);
      
  
  }

  render(){
    return(
    <div className = "pelicula"> 
    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosPeli.poster_path}`} alt="pelis"/>
    <h4 className="titulos-peliculas">{this.props.datosPeli.title}</h4>
            <button onClick={()=> this.add_remove_favs(this.props.datosPeli.id)} type="button"> {this.state.texto_boton} </button>
    <p className="fechas">{this.props.datosPeli.release_date}</p>
            <button onClick={this.mostrar} type="button">
            <p className="fechas">Ver más</p>
            </button>
            {this.state.view && (
            <p className="fechas">{this.props.datosPeli.overview}</p>
            )} 
            <Link to={`/peliculas/${this.props.datosPeli.id}`} className="detail">Ver detalle de pelicula</Link>
    </div>
    )
}
}

export default Peliculas;
