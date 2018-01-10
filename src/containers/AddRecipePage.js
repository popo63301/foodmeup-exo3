import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from './MenuBar';

class addRecipePage extends Component {

  componentDidMount() {
      document.title = "Nouvelle recette";
    }

  render() {

    return (
      <div>
      <MenuBar />
      Nom : <input type="text"/><br/>
      Ingrédients : <input type="text"/><br/>
      Recettes : <input type="text"/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

const AddRecipePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(addRecipePage)

export default AddRecipePage;
