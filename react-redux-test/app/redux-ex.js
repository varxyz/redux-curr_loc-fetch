var redux = require('redux');

const stateDef = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let reducer = (state = stateDef, action) => {
  // console.log(state);
  // console.log(action);
  switch(action.type) {
  case 'CHANGE_SEARCH_TEXT':
    return {
      ...state,
      searchText: action.searchText
    };
  case 'ADD_TODO':
    return {
      ...state,
      todos: [
        ...state.todos,
        action.todos
      ]
    };
  default:
    return state;
  }
};

let store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f=>f));

// store.subscribe(()=>{
//   console.log(store.getState());
//   document.getElementById('app').innerHTML = store.getState().searchText;
// });

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Lapusna'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Chisinau'
});
store.dispatch({
  type: 'ADD_TODO',
  todos: {
    id: 1,
    text: 'clean the room',
    completed: false
  }
});
store.dispatch({
  type: 'ADD_TODO',
  todos: {
    id: 1,
    text: 'feed the cat',
    completed: false
  }
});

// console.log(store.getState());
