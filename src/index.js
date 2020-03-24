import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './componets/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
import reducer from './reducer';
import Student from './componets/Student';
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(reducer);






ReactDOM.render(
      <Provider   store={store}>
      <App />
      {/* <Student /> */}
      </Provider>,document.getElementById('root'))