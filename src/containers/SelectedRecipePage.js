import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from './MenuBar';
import { getListIngredientsWithQuantity } from '../selectors';
import { allergenesForRecipe } from '../selectors/allergene';

class selectedRecipePAge extends Component {

  render() {

    const { recipe, ingredtList, listAllergene } = this.props

    let ingrList = ingredtList.map((e, index) => <p key={index}>{e.name} et {e.poids} g</p>)

    // let allergList= listAllergene.map((e, index) => <p key={index}>{e}</p>)

    let theallergList;

    if (listAllergene) {
      theallergList = listAllergene.length > 0 ? listAllergene.reduce((elem, accum) => elem + ', ' + accum): ''
        }
      else {
        theallergList = ''
        }

    return (
      <div>
      <MenuBar />
      Nom de la recette: {recipe.name}<br/>
      Ingrédients: <br/>
      {ingrList}<br/><br/>
      Allergènes:
      {theallergList}<br/><br/>
      Poids total: {recipe.poids} g
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.byId[props.match.params.idRecipe],
  ingredtList: getListIngredientsWithQuantity(state, props),
  listAllergene: allergenesForRecipe(state, props.match.params.idRecipe)
})

const mapDispatchToProps = {
}

const SelectedRecipePAge = connect(
  mapStateToProps,
  mapDispatchToProps
)(selectedRecipePAge)

export default SelectedRecipePAge;
