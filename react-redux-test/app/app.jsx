import React from 'react';
import ReactDOM from 'react-dom';
impoty Main from './components/Main.jsx';
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!applicationStyles');
require('./redux-example.jsx');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

