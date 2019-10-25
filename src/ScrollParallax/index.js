import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import logo_wraith from "../assets/img/logo_wraith.png";

class ScrollParallax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <img src={logo_wraith} alt="logo_wraith" />
        </Parallax>
      </div>
    );
  }
}

export default ScrollParallax;
