import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <h1>Home</h1>
      <p>Descripcion de la home</p>
      <Footer />
    </React.Fragment>
  );
}

export default Home;