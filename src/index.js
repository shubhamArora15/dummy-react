import React from 'react';
// Helps to call all main method of react to create virtual dom, compoent, class
import ReactDOM from 'react-dom';
// USe class component as first argument and parent element to show that component

import App from './App';
// class component

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
