import React, { Component } from 'react';
import { connect } from 'react-redux';

class ingredientPage extends Component {

  render() {

    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

const IngredientPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ingredientPage)

export default IngredientPage;
