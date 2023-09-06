import React, { Component } from "react";


class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoritos: [],
    };
  }

  render() {
    console.log(this.state.favoritos);
    return (
      <React.Fragment>
        
        <section>
          <h1 style={{color: "white"}}>Coming soon...</h1>
        </section>
      
      </React.Fragment>
    );
  }
  x;
}

export default Favorites;