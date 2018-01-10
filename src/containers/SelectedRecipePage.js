import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from './MenuBar';
import { getListIngredientsWithQuantity } from '../selectors';

class selectedRecipePAge extends Component {

  render() {
    console.log(this.props.recipe)

    const { recipe, ingredtList } = this.props

    let ingrList = ingredtList.map((e, index) => <p key={index}>{e.name} et {e.poids} g</p>)
    return (
      <div>
      <MenuBar />
      Nom de la recette: {this.props.recipe.name}<br/>
      Ingrdients: <br/>
      {ingrList}<br/><br/>
      Poids total: {this.props.recipe.poids} g
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.byId[props.match.params.idRecipe],
  ingredtList: getListIngredientsWithQuantity(state, props)
})

const mapDispatchToProps = {
}

const SelectedRecipePAge = connect(
  mapStateToProps,
  mapDispatchToProps
)(selectedRecipePAge)

export default SelectedRecipePAge;
