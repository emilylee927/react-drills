import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Component/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image url={"https://wpklik.com/wp-content/uploads/2019/03/How-to-Make-a-Custom-404-Page-in-WordPress.jpg"} />
      </div>
    );
  }
}

export default App;


