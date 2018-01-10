import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from './MenuBar';
import AddRecipeItem from './AddRecipeItem';
import { getListIngredientsWithIds, getListRecipesWithIds } from '../selectors'
import { addRow } from '../actions'

class addRecipePage extends Component {

  componentDidMount() {
      document.title = "Nouvelle recette";
    }

  render() {

    let rowsTable = this.props.listRowsTable.map(
      (elem, index) => <AddRecipeItem
        key={index}
        idRow={elem}
        listIngredientWithId={this.props.listIngredientWithId}
        listRecipeWithId={this.props.listRecipeWithId}
        />
    )
    return (
      <div>
      <MenuBar />
      Nom de la recette: <input type="text"/><br/>

      <table>
        <tbody>
          <tr>
            <th>recette? (cochez si Vrai)</th>
            <th>Ingrédient</th>
            <th>Recette</th>
            <th>Quantités (en g)</th>
            <th>Allergènes</th>
            <th>Coût</th>
            <th>Enlever</th>
          </tr>

          {rowsTable}

        </tbody>
      </table>

      <button onClick={() => this.props.addRow()}>Add ingredients</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  listIngredientWithId: getListIngredientsWithIds(state, props),
  listRecipeWithId: getListRecipesWithIds(state, props),
  listRowsTable: state.pageRecipeItem.allIds
})

const mapDispatchToProps = {
  addRow
}

const AddRecipePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(addRecipePage)

export default AddRecipePage;
