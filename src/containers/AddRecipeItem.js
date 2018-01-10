import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleRecette, deleteRowIngredientRecipe } from '../actions';
import { getListAllergenesForRow } from '../selectors'

class addRecipeItem extends Component {

  render() {

    const { isRecette,
        toggleRecette,
        idRow,
        listAllergnes ,
        deleteRowIngredientRecipe} = this.props

    let selectionIngredient = (
      <select>
        {this.props.listIngredientWithId.map((elem, index) =>
          <option key={index} value={elem.id}>{elem.name}</option>)
        }
      </select>)

    let selectionRecipe = (
      <select>
        {this.props.listRecipeWithId.map((elem, index) =>
          <option key={index} value={elem.id}>{elem.name}</option>)
        }
      </select>)

    let theListAllergenes = listAllergnes ? listAllergnes.reduce((elem, accum) => elem + ', ' + accum)
        : ''
    return (
      <tr>
        <td> <input type="checkbox" onClick={() => toggleRecette(idRow)}/> </td>
        <td>{isRecette ? "": selectionIngredient}</td>
        <td>{isRecette ? selectionRecipe : ""}</td>
        <td> <input type="text"/> </td>
        <td>{theListAllergenes}</td>
        <td>50</td>
        <td><span role="img" onClick={() => deleteRowIngredientRecipe(idRow)}>❌</span></td>
      </tr>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isRecette: state.pageRecipeItem.byId[props.idRow].isSelected,
  listAllergnes: getListAllergenesForRow(state, props)

  })

const mapDispatchToProps = {
  toggleRecette,
  deleteRowIngredientRecipe
}

const AddRecipeItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(addRecipeItem)

export default AddRecipeItem;
