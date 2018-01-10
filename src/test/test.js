import {getTotalCostForRecipe} from '../selectors/cout'

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
  }
}


test('Test total cost recipe', () => {

  let value = getTotalCostForRecipe(mock, 'jobz');

  console.log(value)
  //Pour n'avoir que deux décimales après la virgule.
  var two_dec_only = Number(value.toFixed(2));

  expect(two_dec_only).toEqual(3.95);

});
