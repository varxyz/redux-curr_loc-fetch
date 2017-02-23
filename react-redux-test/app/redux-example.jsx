import redux from 'redux';
import {addHobby, startLocationFetch, completeLocationFetch, fetchLocation} from './actions/index.js';
import { configure } from './store/configureStore';
const store = configure();

//subscribe to changes
const unsubscribe = store.subscribe(() => {
  var state = store.getState();
  if(state.map.isFetching) {
    document.querySelector('#app').innerHTML = 'Fetching...';
  } else if (state.map.url) {
    document.querySelector('#app').innerHTML = '<a href="'+state.map.url+'" target="_blank">View location</a>'  ;

  }
});
//unsubscribe();

store.dispatch(fetchLocation());

store.dispatch(addHobby('spinning'));
store.dispatch({
  type:'ADD_HOBBY',
  hobby: 'running'
});
store.dispatch({
  type:'REMOVE_HOBBY',
  id: 2
});
store.dispatch({
  type:'ADD_MOVIE',
  title:'Star Wars',
  genre: 'SF'
});
store.dispatch({
  type:'ADD_MOVIE',
  title:'Interstellar',
  genre: 'SF'
});
store.dispatch({
  type:'REMOVE_MOVIE',
  id: 2
});






















