import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador";

//meter logo y barra de navegacion
function Header () {
  return (
    <React.Fragment>
   
   
    {/* LOGO DEL GRUPO PONER */}
  <header className="Header">
    <section class="header">
            <article>
                <a  href="./index.html">
                 
                </a>
            </article>   
            <article class="barranav">
                <Link to='/'> HOME  </Link>
                <Link to='/peliculas'> VER TODAS  </Link>
                <Link to="/favorites"> FAVORITOS </Link> 
            </article>
            <article class="cuadrado"><h2><i class="fa-solid fa-bars"></i></h2></article>
            <article>
            </article>
            <Buscador/>
        </section>
        </header>
        </React.Fragment>
)
}
export default Header;

