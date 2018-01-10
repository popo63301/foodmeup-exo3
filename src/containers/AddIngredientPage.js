import React, { Component } from 'react';
import '../style.css';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';
import { addFieldAllergene,
  updateFieldIngredientPage,
  updateAllergeneIngredientPage,
  quitAddIngredient,
  addNewIngredient } from '../actions';

class addIngredientPage extends Component {
  constructor(props) {
    super(props)
    this.state = {message: ""}
  }
  componentDidMount() {
      document.title = "Nouvel ingrédient";
    }

  componentWillUnmount() {
    this.props.quitAddIngredient()
  }

  checkField() {
    const { pageIngredient } = this.props

    if(!pageIngredient.name || !pageIngredient.cost) {
      this.setState({message: "Compléter les champs obligatoires (*)"})

    } else if (isNaN(pageIngredient.cost)) {
      this.setState({message: "Le coût n'est pas un nombre valide"})
    } else {
      this.props.addNewIngredient(pageIngredient)
      this.props.history.push('/ingredient')
    }

  }
  render() {
    const {
      allergenes,
      addFieldAllergene,
      updateFieldIngredientPage,
      updateAllergeneIngredientPage
    } = this.props

    const listAllergnes = allergenes.map((elem, index) =>
        <input
          type="text"
          key={index}
          onBlur={(e) => updateAllergeneIngredientPage(index, e.target.value)}/>)

    return (
      <div>
      <MenuBar /><br/><br/>

      Nom* : <input
          type="text"
          onBlur={(e) => updateFieldIngredientPage('name', e.target.value)}/><br/>
      Coût* (en € par g) : <input
          type="text"
          onBlur={(e) => updateFieldIngredientPage('cost', e.target.value)}/><br/>
      Allergènes : {listAllergnes}<br/>
      <button onClick={() => addFieldAllergene()}>Ajouter un allergène</button><br/><br/>

      <button onClick={() => this.checkField()}>Créer cet ingrédient</button><br/><br/>

      <p style={{color:'red'}}>{this.state.message}</p>

      <br/>
      * Obligatoire
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  allergenes: state.pageIngredient.allergenes,
  pageIngredient: state.pageIngredient
})

const mapDispatchToProps = {
  addFieldAllergene,
  updateFieldIngredientPage,
  updateAllergeneIngredientPage,
  quitAddIngredient,
  addNewIngredient
}

const AddIngredientPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(addIngredientPage)

export default AddIngredientPage;
