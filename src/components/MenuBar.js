import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class MenuBar extends Component {

  render() {

    return (
      <div className="menuBarContainer">
      <Link to="/" className="recetteButton">Mes Recettes</Link>
      <span className="invisibleSpan">- - -</span>
      <Link to="/ingredient" className="ingredientButton">Mes Ingrédients</Link>
      </div>
    );
  }
}

export default MenuBar;
