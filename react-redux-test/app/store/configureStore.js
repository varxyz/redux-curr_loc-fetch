const redux = require('redux');
const thunk = require('redux-thunk').default;
const {hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

export var configure = () => {
  var reducer = redux.combineReducers({
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
  return store;
};

