import React, {Component} from "react";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";

class TodasPopu extends Component {
  constructor() {
    super();
    this.state = {
      pelis: [],
    };
  }

  componentDidMount(){
    let favs = []
    let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favs = JSON.parse(recuperoStorage)
            console.log(favs)
            let pelisOk = [];

            favs.forEach(IdFav => {
                let url = `https://api.themoviedb.org/3/movie/${IdFav}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1`
                fetch(url)
                    .then(response => response.json())
                    .then(data => pelisOk.push(data))
                    .then(() => this.setState(
                        {
                            pelis: pelisOk }
                            
                    ))
                    .catch(error => console.log('El error es' + error))
            })   
        }
  }

  borrar(id){
    let favs = [];
    let recuperoStorage = localStorage.getItem('favoritos')
    if(recuperoStorage !== null){
        let favsToArray = JSON.parse(recuperoStorage);
        favs = favsToArray
    }
    if(favs.includes(id)){ 
        favs = favs.filter(unId => unId !== id);
        this.setState({
        pelis: this.state.pelis.filter(unaPeli => unaPeli.id !== id) 
        })
    }

    let favsToString = JSON.stringify(favs);
    localStorage.setItem('favoritos', favsToString);


  }

  render() {
    console.log(this.state.pelis);
    return (
      <React.Fragment>
      
        <section className="main-index">
          <h1 style={{color: "white"}}>Películas favoritas</h1>
          {this.state.pelis.map((unaPeli, idx) => <PeliculaCard key={unaPeli + idx} datosPeli={unaPeli} borrar={(peliFiltro)=> this.borrar(peliFiltro)} />)}
        </section>
      
      </React.Fragment>
    );
  }
  x;
}

export default TodasPopu;


