import React, { Component } from 'react';
import { connect } from 'react-redux';

class recipeItem extends Component {

  render() {

    return (
      <div>{this.props.recipeName}
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
