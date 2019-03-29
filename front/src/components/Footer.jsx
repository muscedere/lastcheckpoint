import React, { Component } from 'react';
import './Footer.css'
import coeur_logo from "./images/coeur_logo.png";


class Footer extends Component {

  render() {
    return (
      <div className="background-footer">
      <span className="meko" href="">Copyright 2019</span>
        <footer className="logo-footer">
        </footer>
        <span className="burger">Made with <img className="logo-coeur" alt="coeur" src={coeur_logo}></img> by WILD Cineteam</span>
      </div>
    )
  }
}
export default Footer;