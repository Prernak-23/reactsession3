import React, { Component } from "react";
import "./App.css";

import CartManager from "./CartManager/CartManager";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Cart</h1>
        <CartManager />
      </div>
    );
  }
}

export default App;
