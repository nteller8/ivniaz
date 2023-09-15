import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard';

class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculaBuscada: [],
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&query=${this.props.match.params.abuscar}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculaBuscada: data.results,
            }, () => console.log(data.results)))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <section className="main-index">
                    <h2 className='titulo'>Resultados de Búsqueda</h2>
                    {this.state.peliculaBuscada.length > 0 ?
                        <section className="recommended_series">
                            {this.state.peliculaBuscada.map((peli, idx) => <PeliculaCard key={peli + idx} datosPelicula={peli} />)}
                        </section> :
                        <h3> Loading...</h3>}
                </section>

            </React.Fragment>
        )
    }
}


export default SearchResults