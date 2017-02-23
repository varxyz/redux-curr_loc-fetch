import axios from 'axios';

//action generator for HOBBIES
export let addHobby = (hobby) =>  {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};


export let startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export let completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

//thunk
export let fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then((res)=>{
      let loc = res.data.loc;
      let baseUrl = 'http://maps.google.com?q=';
      dispatch(completeLocationFetch(baseUrl + loc));
    });
  };
};
