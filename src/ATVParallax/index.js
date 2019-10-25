import React, { Component } from "react";
import ATVParallax from "react-atv-parallax";
import logo_druid from "../assets/img/logo_druid.png";
import "./style.scss";

class Parallax extends Component {
  render() {
    return (
      <div className="parallaxStyle">
        <ATVParallax style={{ width: 200, height: 200 }}>
          <img src={logo_druid} alt="img1" />
        </ATVParallax>
      </div>
    );
  }
}

export default Parallax;
