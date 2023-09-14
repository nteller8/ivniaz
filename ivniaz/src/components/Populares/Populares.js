import React, {Component} from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard';
import Filtro from '../Filtro/Filtro';

class Populares extends Component{
    constructor(){
        super()
        this.state={
            pelisPopulares:[],
            botonApretado: false,
            page:1
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&page="+this.state.page)
            .then( res => res.json())
            .then( data => this.setState({
                pelisPopulares: data.results,
                page:this.state.page+1
            }))
            .catch( error => console.log(error) )
    }
    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas = this.state.pelisPopulares.filter(function(unaPelicula){
            return unaPelicula.title.includes(textoAFiltrar)
        })
        this.setState({
            pelisPopulares: peliculasFiltradas
        })
    }
    traerMas(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&page="+this.state.page)
            .then( res => res.json())
            .then( data => this.setState({
                pelisPopulares: this.state.pelisPopulares.concat(data.results),
                page:this.state.page+1
            }))
            .catch( error => console.log(error) )
    }
    
    render(){
        console.log(this.setState.pelisPopulares)
        return(
            <React.Fragment>
            <h2>Películas Populares</h2>
            <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)}/>
            {
                this.state.pelisPopulares.length >0?
            <section>
                {  
                    this.state.pelisPopulares.map(
                        (peli,idx) => <PeliculaCard key={peli + idx} datosPeli={peli}/>
                    )
                }
                <button  onClick={()=>this.traerMas(this.state.pelisPopulares)} className="boton" > Traer más </button>
            </section>:
            <h3> Loading...</h3> 
            }
            
            </React.Fragment>
        )
    }
}
export default Populares