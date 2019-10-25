import React, { Component } from "react";
import "./App.css";
import Parallax from "./ATVParallax";
// import { ParallaxProvider } from "react-scroll-parallax";
// import ScrollParallax from "./ScrollParallax";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax />
        {/**
        <ParallaxProvider>
          <ScrollParallax />
        </ParallaxProvider>
        */}
      </div>
    );
  }
}

export default App;
