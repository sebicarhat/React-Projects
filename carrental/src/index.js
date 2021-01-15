import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import "semantic-ui-css/semantic.min.css";
import App from './App';
import rootReducer from './rootReducer';
import {userLoggedIn} from './actions/auth' ;


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.userData){
  const user ={email: localStorage.userData, role: localStorage.userRole, userId: localStorage.userId}
  store.dispatch(userLoggedIn(user));
}



ReactDOM.render(
  <BrowserRouter>
    <Provider  store = {store}>
      <Route component={App}/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
