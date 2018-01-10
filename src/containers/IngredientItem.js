import React, { Component } from 'react';
import { connect } from 'react-redux';

class ingredientItem extends Component {

  render() {

    return (
      <div>{this.props.ingredientName}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ingredientName: state.ingredients.byId[props.ingredientId].name
})

const mapDispatchToProps = {
}

const IngredientItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ingredientItem)

export default IngredientItem;
