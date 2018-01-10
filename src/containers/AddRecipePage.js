import React, { Component } from 'react';
import '../style.css';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';
import AddRecipeItem from './AddRecipeItem';
import { getListIngredientsWithIds,
  getListRecipesWithIds,
  getBoolValidityQuantityField,
  getListRowsNewRecipe } from '../selectors'
import { addRow, updateNameField, quitAddRecipe, createNewRecipe } from '../actions'

class addRecipePage extends Component {
  constructor(props) {
    super(props)
    this.state = {message: ""}
  }

  componentWillMount() {
    this.props.addRow(this.props.firstIng)
  }

  componentDidMount() {
      document.title = "Nouvelle recette";
    }

  componentWillUnmount() {
    this.props.quitAddRecipe()
  }

  checkBeforeCreating() {
    if (!this.props.nameRecipe) {
      this.setState({message: "Donnez au moins un nom à votre recette :D"})
    }else if (this.props.listRowsTable.length < 2) {
      this.setState({message: "Il faut au minimum 2 ingrédients/recettes (sinon ce n'est pas une recette ;))"})
    } else if (this.props.validityQuantityFields) {
      this.setState({message: "Vérifiez les quantités de sorte que ce soit des nombres valides"})
    } else {
      this.setState({message: ""})
      this.props.createNewRecipe(this.props.nameRecipe, this.props.listCompleteRows)
      this.props.history.push('/')
    }
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
      <MenuBar /><br/><br/>
      Nom de la recette: <input type="text" onBlur={(e) => this.props.updateNameField(e.target.value)}/><br/>

      <table>
        <tbody>
          <tr>
            <th>recette? (cochez si Vrai)</th>
            <th>Ingrédient</th>
            <th>Recette</th>
            <th>Quantités (en g)</th>
            <th>Enlever</th>
          </tr>

          {rowsTable}

        </tbody>
      </table>

      <button onClick={() => this.props.addRow(this.props.firstIng)}>Add ingredients</button><br/>
      <p style={{color:'red'}}>{this.state.message}</p>
      <button onClick={() => this.checkBeforeCreating()}>test</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  listIngredientWithId: getListIngredientsWithIds(state, props),
  listRecipeWithId: getListRecipesWithIds(state, props),
  listRowsTable: state.pageRecipeItem.allIds,
  listCompleteRows: getListRowsNewRecipe(state, props),
  validityQuantityFields: getBoolValidityQuantityField(state, props),
  nameRecipe: state.pageRecipeItem.general.name,
  firstIng: state.ingredients.byId[state.ingredients.allIds[0]].id || ''
})

const mapDispatchToProps = {
  addRow,
  updateNameField,
  quitAddRecipe,
  createNewRecipe
}

const AddRecipePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(addRecipePage)

export default AddRecipePage;
