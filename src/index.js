import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker'
import { StateProvider } from './StateProvider';
import Reducer, { initialState } from './Reducer';
import {BrowserRouter as Router} from 'react-router-dom';
import { from } from 'form-data';

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={Reducer}>
    <App />
    </StateProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
