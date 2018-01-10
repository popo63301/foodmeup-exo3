import React, { Component } from 'react';
import '../style.css';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';
import { getListIngredientsWithQuantity } from '../selectors';
import { allergenesForRecipe } from '../selectors/allergene';
import { getTotalCostForRecipe } from '../selectors/cout';

class selectedRecipePAge extends Component {

  render() {

    const { recipe, ingredtList, listAllergene, totalCost } = this.props

    let ingrList = ingredtList.map((e, index) => <p key={index}>{e.name}, {e.poids} g</p>)

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
      <MenuBar /><br/><br/>

      <div className="titleRecipe">{recipe.name}</div><br/>
      <div className="ingredientTitle">Ingrédients:</div> <br/>
      {ingrList}<br/><br/>
      <span className="ingredientTitle">Allergènes:</span> {theallergList}<br/><br/>
      <span className="ingredientTitle">Poids total:</span>  {recipe.poids} g<br/>
      <span className="ingredientTitle">Prix total:</span>  {totalCost.toFixed(2)} €
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.byId[props.match.params.idRecipe],
  ingredtList: getListIngredientsWithQuantity(state, props),
  listAllergene: allergenesForRecipe(state, props.match.params.idRecipe),
  totalCost: getTotalCostForRecipe(state, props.match.params.idRecipe)
})

const mapDispatchToProps = {
}

const SelectedRecipePAge = connect(
  mapStateToProps,
  mapDispatchToProps
)(selectedRecipePAge)

export default SelectedRecipePAge;
