import React, { Component } from 'react';
import { connect } from 'react-redux';

class addIngredientPage extends Component {

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

const AddIngredientPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(addIngredientPage)

export default AddIngredientPage;
