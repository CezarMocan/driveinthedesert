'use strict';
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import router from './router.js'
import styles from './styles/main.less'
import App from './App.jsx'

function run() {
  ReactDOM.render(<App />, document.getElementById('react-container'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}