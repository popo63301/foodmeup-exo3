import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from './MenuBar';

class addIngredientPage extends Component {

  componentDidMount() {
      document.title = "Nouvel ingrédient";
    }

  render() {

    return (
      <div>
      <MenuBar />
      Nom : <input type="text"/><br/>
      Coût : <input type="text"/><br/>
      Allergènes : <input type="text"/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

const AddIngredientPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(addIngredientPage)

export default AddIngredientPage;
