import React, { Component } from 'react';
import { connect } from 'react-redux';

class addRecipePage extends Component {

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

const AddRecipePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(addRecipePage)

export default AddRecipePage;
