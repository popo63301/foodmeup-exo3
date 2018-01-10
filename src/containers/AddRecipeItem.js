import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleRecette,
  deleteRowIngredientRecipe,
  chooseIngredientOrRecipe,
  updateFieldQuantity } from '../actions';

class addRecipeItem extends Component {

  render() {

    const { isRecette,
        toggleRecette,
        idRow,
        deleteRowIngredientRecipe,
        chooseIngredientOrRecipe,
        updateFieldQuantity} = this.props

    let selectionIngredient = (
      <select onChange={(e) => chooseIngredientOrRecipe(idRow, e.target.value)}>
        {this.props.listIngredientWithId.map((elem, index) =>
          <option
          key={index}
          value={elem.id}>{elem.name}</option>)
        }
      </select>)

    let selectionRecipe = (
      <select  onChange={(e) => chooseIngredientOrRecipe(idRow, e.target.value)}>
        {this.props.listRecipeWithId.map((elem, index) =>
          <option
          key={index}
          value={elem.id}>{elem.name}</option>)
        }
      </select>)

    return (
      <tr>
        <td> <input type="checkbox" onClick={() => toggleRecette(idRow)}/> </td>
        <td>{isRecette ? "": selectionIngredient}</td>
        <td>{isRecette ? selectionRecipe : ""}</td>
        <td> <input type="text" onBlur={(e) => updateFieldQuantity(idRow,e.target.value)}/> </td>
        <td><span role="img" onClick={() => deleteRowIngredientRecipe(idRow)}>❌</span></td>
      </tr>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isRecette: state.pageRecipeItem.byId[props.idRow].isSelected,
  })

const mapDispatchToProps = {
  toggleRecette,
  deleteRowIngredientRecipe,
  chooseIngredientOrRecipe,
  updateFieldQuantity
}

const AddRecipeItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(addRecipeItem)

export default AddRecipeItem;
