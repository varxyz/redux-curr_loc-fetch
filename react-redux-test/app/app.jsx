import React from 'react';
import ReactDOM from 'react-dom';
//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
// $(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>lol</p>,
  document.getElementById('app')
);

require('./redux-example.jsx');
// require('./redux-ex.js');
