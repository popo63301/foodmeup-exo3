import React, { Component } from 'react';
import { connect } from 'react-redux';

class ingredientItem extends Component {

  render() {
    const {name,
          cost,
          allergenes } = this.props

    let listAllergnesItem;
    if (allergenes) {
      listAllergnesItem = allergenes.length > 0 ? allergenes.reduce((elem, accum) => elem + ', ' + accum)
          : ''
    } else {
      listAllergnesItem = ''
    }
    return (
      <div>{name} - {cost}€/g
      {listAllergnesItem  ? <p>allergène(s): {listAllergnesItem}</p> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  name: state.ingredients.byId[props.ingredientId].name,
  cost: state.ingredients.byId[props.ingredientId].cost,
  allergenes: state.ingredients.byId[props.ingredientId].listAllergnes
})

const mapDispatchToProps = {
}

const IngredientItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ingredientItem)

export default IngredientItem;
