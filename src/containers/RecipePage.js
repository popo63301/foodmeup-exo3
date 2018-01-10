import React, { Component } from 'react';
import '../style.css';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';
import { getListAllRecipes } from '../selectors';

class recipePage extends Component {
  constructor(props) {
    super(props)
    this.state = {search:""}
  }
    componentDidMount() {
        document.title = "Mes Recettes";
      }
    render() {
      const {recipeIds, listAllRecipes} = this.props

      let listRecipes;

      if (this.state.search === "") {
        listRecipes = recipeIds.map((elem, index) => <RecipeItem key={index} recipeId={elem}/>)
      } else {
        let newArray = listAllRecipes.filter(elem => elem.name.includes(this.state.search))
        newArray = newArray.map((e) => e.id)
        listRecipes = newArray.map((elem, index) => <RecipeItem key={index} recipeId={elem}/>)
      }

      return (
        <div>
        <MenuBar /><br/><br/>
        <div className="mesRecettesTitle">Mes recettes 🍱</div><br/>
        <input type="text"
        placeholder="Chercher une recette"
        onKeyUp={(e) => this.setState({search:e.target.value})} />

        <Link to="/add_recipe" className="buttonAddRecipe"><button>Créer une recette</button></Link>
        {listRecipes}
        </div>
      );
    }
  }

const mapStateToProps = (state, props) => ({
  recipeIds: state.recipes.allIds,
  listAllRecipes: getListAllRecipes(state, props)
})

const mapDispatchToProps = {
}

const RecipePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(recipePage)

export default RecipePage;
