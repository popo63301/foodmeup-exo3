import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from './MenuBar';
import IngredientItem from './IngredientItem';
import { Link } from 'react-router-dom';

class ingredientPage extends Component {

  componentDidMount() {
      document.title = "Mes Ingrédients";
    }

  render() {
    const {ingredientIds} = this.props
    const listIngredients = ingredientIds.map((elem, index) => <IngredientItem key={index} ingredientId={elem}/>)
    return (
      <div>
      <MenuBar />
      <Link to="/add_ingredient"><button>Créer un ingrédient</button></Link>
      {listIngredients}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ingredientIds: state.ingredients.allIds
})

const mapDispatchToProps = {
}

const IngredientPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ingredientPage)

export default IngredientPage;
