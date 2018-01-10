import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from './MenuBar';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class recipePage extends Component {
    componentDidMount() {
        document.title = "Mes Recettes";
      }
    render() {
      const {recipeIds} = this.props
      const listRecipes = recipeIds.map((elem, index) => <RecipeItem key={index} recipeId={elem}/>)
      return (
        <div>
        <MenuBar />
        <Link to="/add_recipe"><button>Créer une recette</button></Link>
        {listRecipes}
        </div>
      );
    }
  }

const mapStateToProps = (state, props) => ({
  recipeIds: state.recipes.allIds
})

const mapDispatchToProps = {
}

const RecipePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(recipePage)

export default RecipePage;
