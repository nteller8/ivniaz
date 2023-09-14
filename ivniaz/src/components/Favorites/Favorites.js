import React, {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelisFavs: [],
    };
  }

  componentDidMount(){
    let favoritos = []
    let recuperoStorageFav = localStorage.getItem('favoritos')
        if(recuperoStorageFav !== null){
            let pelisFavsAarray = JSON.parse(recuperoStorageFav) 
            favoritos = pelisFavsAarray
        }
        favoritos.map((IdFav) => {
          let url = `https://api.themoviedb.org/3/movie/${IdFav}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1`;
          
          fetch(url)
              .then(response => response.json())
              .then(dataFav => {
                  let pelisOk = this.state.pelisFavs;
                  pelisOk.push(dataFav);
                  this.setState({ pelisFavs: pelisOk });
              })
              .catch(error => console.log('El error es' + error));
              console.log(favoritos);
          return true;
      });
  }
  

  render() {
    console.log(this.state.pelisFavs);
    return (
      <React.Fragment>
      

        <h2 className="titulo">Tus películas favoritas</h2>
                <section className="main-index">
                    <div className="recommended_movies">
                        {this.state.pelisFavs.map(
                            (peliculaFav, idx) => <PeliculaCard key={peliculaFav + idx} datosPelicula={peliculaFav} />
                        )}
                    </div>
                </section>
      
      </React.Fragment>
    );
  }
}

export default Favorites;

