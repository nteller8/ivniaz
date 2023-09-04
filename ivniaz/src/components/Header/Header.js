import React, { Component } from "react";

import "./Header.css";


function Header () {
  return (
  <header className="Header">
    <section class="header">
            <article>
                <a  href="./index.html">
                 
                </a>
            </article>   
            <article class="barranav">
                <a href="./index.html"> HOME </a>
                <a href="./genres.html"> GÉNEROS </a>
                <a href="./favoritos.html"> FAVORITOS </a>   
            </article>
            <article class="cuadrado"><h2><i class="fa-solid fa-bars"></i></h2></article>
            <article>
                
            </article>
        </section>
      
        
        </header>
)
}
export default Header;

