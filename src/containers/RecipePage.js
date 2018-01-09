import React, { Component } from 'react';
import { connect } from 'react-redux';

class recipePage extends Component {

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

const RecipePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(recipePage)

export default RecipePage;
