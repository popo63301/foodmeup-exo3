import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class menuBar extends Component {

  render() {

    return (
      <div>
      <Link to="/">Mes Recettes</Link> - - - 
      <Link to="/ingredient">Mes Ingrédients</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

const MenuBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(menuBar)

export default MenuBar;
