import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from './reducers';
import AddIngredientPage from './containers/AddIngredientPage';
import AddRecipePage from './containers/AddRecipePage';
import RecipePage from './containers/RecipePage';
import IngredientPage from './containers/IngredientPage';
import { BrowserRouter, Route } from 'react-router-dom';

let mock = {}

let store = createStore(appStore, mock)

console.log(store.getState())

store.subscribe(() => {
  let store1 = store.getState()

  console.log(store1)

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
