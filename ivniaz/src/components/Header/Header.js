import React from "react";
import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador";
import "./Header.css"

//meter logo y barra de navegacion
function Header () {
  return (
    <React.Fragment>
   
   
    {/* LOGO DEL GRUPO PONER */}
  <header className="barranav">
    <section className="barranav">
            <article>
                
            <img className= "logo_plat"src="img/logo.png" alt="logo"></img>
            </article>   
            <article className="barranav">
                <Link to='/'> HOME  </Link>
                <Link to='/todaspopu'> POPULARES  </Link>
                <Link to='/todascarte'> CARTELERA  </Link>
                <Link to="/favorites"> FAVORITOS </Link> 
            </article>
            <article className="cuadrado"><h2><i className="fa-solid fa-bars"></i></h2></article>
            <article>
            </article>
            <Buscador/>
        </section>
        </header>
        </React.Fragment>
)
}
export default Header;

