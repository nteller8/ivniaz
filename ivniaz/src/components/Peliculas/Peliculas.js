import React from "react";
import {Link} from "react-router-dom";


class Peliculas extends Component {
  constructor(props){
    super(props)
    this.state={
      view:false,
      textoFavoritos: "Agregar a favoritos"
    }
  }

  mostrar = () => {
    this.setState({view: !this.state.view});
  };

  componentDidMount(){
    let recuperoStorage = localStorage.getItem ("favoritos");
    
    if (recuperoStorage !== null) {
        let favoritos = JSON.parse (recuperoStorage);

        if (favoritos.includes (this.props.datosPelicula.id)){
            this.setState ({
                textoFavoritos: "Quitar de favoritos"
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
              textoFavoritos: "Agregar a favoritos"
          })

       } else {
          favoritos.push (id);
          this.setState ({
              textoFavoritos: "Quitar de favoritos",
          })
       }


      let favoritostoString= JSON.stringify(favoritos);
      localStorage.setItem ("favoritos", favoritostoString);
      
  
  }

  //cambiar las clases segun el css!!!!
  render(){
    return(
    <div className = "pelicula"> 
    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`} alt="pelis"/>
    <h4 className="titulos-peliculas">{this.props.datosPelicula.title}</h4>
            <button onClick={()=> this.add_remove_favs(this.props.datosPelicula.id)} type="button"> {this.state.textoFavoritos} </button>
    <p className="fechas">{this.props.datosPelicula.release_date}</p>
            <button onClick={this.mostrar} type="button">
            <p className="fechas">Ver más</p>
            </button>
            {this.state.view && (
            <p className="fechas">{this.props.datosPelicula.overview}</p>
            )} 
            <Link to={`/peliculas/${this.props.datosPelicula.id}`} className="detail">Ver detalle de pelicula</Link>
    </div>
    )
}
}

export default Peliculas;
