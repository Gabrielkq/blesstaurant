import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { reducer } from './redux/reducer'

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Provider store={store}>
          <Route path="/" component={App}/>
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
