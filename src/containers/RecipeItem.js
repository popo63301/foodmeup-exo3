import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class recipeItem extends Component {

  render() {

    return (
      <div>
      <Link to={`/recipe/${this.props.recipeId}`}>
      {this.props.recipeName}
      </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  recipeName: state.recipes.byId[props.recipeId].name
})

const mapDispatchToProps = {
}

const RecipeItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(recipeItem)

export default RecipeItem;
