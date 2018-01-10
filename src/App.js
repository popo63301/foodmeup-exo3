import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from './reducers';
import AddIngredientPage from './containers/AddIngredientPage';
import AddRecipePage from './containers/AddRecipePage';
import RecipePage from './containers/RecipePage';
import IngredientPage from './containers/IngredientPage';
import SelectedRecipePage from './containers/SelectedRecipePage';
import { BrowserRouter, Route } from 'react-router-dom';

let mock = {
  ingredients: {
    byId: {
      'x3dsmm': {id: "x3dsmm", name: "concombre", cost: 0.2, listAllergnes:["bggg", "jojo"]},
      'nfrecc': {id: "nfrecc", name: "tomate", cost: 0.45, listAllergnes:["toto", "bobo", "jojo"]},
      'mikoke': {id: "mikoke", name: "sucre", cost: 0.45, listAllergnes:["glucose"]}
    },
    allIds: ['x3dsmm', 'nfrecc', 'mikoke']
  },
  recipes: {
    byId: {
      'pm12xw': {id:'pm12xw', name: 'salade de concombre et de tomate',
          listIngredients: [{id:'x3dsmm', isRecipe: false, quantity: 4}, {id:'nfrecc', isRecipe: false, quantity: 4}],
          poids: 8},
      'jobz': {id:'jobz', name: 'salade de bananes',
          listIngredients: [{id:'x3dsmm', isRecipe: false, quantity: 4}, {id:'nfrecc', isRecipe: false, quantity: 5},
                {id:'nitakoz', isRecipe: true, quantity: 2}],
        poids: 11},
        'nitakoz': {id:'nitakoz', name: 'sirop de glucose',
            listIngredients: [{id:'mikoke', isRecipe: false, quantity: 4}],
          poids: 4}
    },
    allIds: ['pm12xw', 'jobz', 'nitakoz']
  },
  // pageRecipeItem: {
  //   byId: {
  //   },
  //   allIds: []
  // }
}

let store = createStore(appStore, mock)

// console.log(store.getState())

store.subscribe(() => {
  let store1 = store.getState()

});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={RecipePage} />
            <Route path="/ingredient" component={IngredientPage} />
            <Route path="/add_ingredient" component={AddIngredientPage} />
            <Route path="/add_recipe" component={AddRecipePage} />
            <Route path="/recipe/:idRecipe" component={SelectedRecipePage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
