import React from "react";


const Peliculas = () => {
  return (
    <React.Fragment>
      
<section class="principal">
    <video autoplay muted loop class="trailer"><source src="./img/trailer.mp4" type="video/mp4"/></video>
    <article>
        <h3 class = "texto-encima_thecrown"> The Crown</h3>
        <p class="texto-encima_thecrown_descripcion">The Crown es una serie creada por Peter Morgan y producida por Netflix de carácter biográfico que se centra en la vida de la Reina Isabel II de Inglaterra y la historia mundial que ha tenido lugar a lo largo de su extenso reinado. La serie explora la vida personal de la Reina, pero también plasma el mundo de la postguerra, con la sociedad en constante transformación debido a los distintos y bruscos cambios acontecidos, hasta la situación de relativa calma actual.</p>
    </article>
    <a href="./detail-serie.html?id=65494"><button class="boton"> ▶︎ Reproducir</button></a>
    <a href="./detail-serie.html?id=65494"><button class="boton"> + Más información</button></a>
</section>


<h2 class = "titulo_ppl">Peliculas populares</h2>
    
<section class="peliculas_populares"></section>



<h2 class = "titulo_ppl"> Series populares</h2>
<section class = "series_populares" >
</section>

<h2 class = "titulo_ppl">Peliculas mejores calificadas</h2>
<section class = "peliculas_toprated"></section>


    </React.Fragment>
  );
};

export default Peliculas;