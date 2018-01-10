import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from './reducers';
import AddIngredientPage from './containers/AddIngredientPage';
import AddRecipePage from './containers/AddRecipePage';
import RecipePage from './containers/RecipePage';
import IngredientPage from './containers/IngredientPage';
import { BrowserRouter, Route } from 'react-router-dom';

let mock = {
  ingredients: {
    byId: {
      'x3dsmm': {id: "x3dsmm", name: "concombre"},
      'nfrecc': {id: "nfrecc", name: "tomate", listAllergnes:["toto", "bobo", "jojo"]}
    },
    allIds: ['x3dsmm', 'nfrecc']
  },
  recipes: {
    byId: {
      'pm12xw': {id:'pm12xw', name: 'salade de concombre'}
    },
    allIds: ['pm12xw']
  }
}

let store = createStore(appStore, mock)

console.log(store.getState())

store.subscribe(() => {
  let store1 = store.getState()

  console.log(store1.pageIngredient)

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
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
