import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";


function Header () {
  return (
    <React.Fragment>
   
    
  <header className="Header">
    <section class="header">
            <article>
                <a  href="./index.html">
                 
                </a>
            </article>   
            <article class="barranav">
                <Link to='/'> HOME  </Link>
                <Link to='/genres'> GÉNEROS  </Link>
                <Link to="/favorites"> FAVORITOS </Link> 
            </article>
            <article class="cuadrado"><h2><i class="fa-solid fa-bars"></i></h2></article>
            <article>
                
            </article>
        </section>
      
        
        </header>
        </React.Fragment>
)
}
export default Header;

