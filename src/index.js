import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
// import reportWebVitals from './reportWebVitals';

// action values
const selectall_Status = 'selectall'
const inprogress_Status = 'inprogress';
const completed_Status = 'completed';
const failed_Status = 'failed'

// actions
export const selactallAction = () => ({type: selectall_Status})
export const inProgressAction = () => ({type: inprogress_Status})
export const completedAction = () => ({type: completed_Status})
export const failedAction = () => ({type: failed_Status})

// reducer
const statusReducer = (status, actions) => {
  switch (actions.type) {
    case selectall_Status:
      return status = 'Select All';
    case inprogress_Status: 
      return status = 'In Progress';
    case completed_Status:
      return status = 'Completed';
    case failed_Status:
      return status = 'Failed';
    default:
      return status = 'Select All'
  }
}

let store = createStore(statusReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);