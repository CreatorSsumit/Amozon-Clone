import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter,Route} from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux" 
import Reducers from "./reducers"
import PromiseMiddleWare from "redux-promise"
import * as serviceWorker from './serviceWorker';
import history from './history';
const createStoreMiddeleWrare = applyMiddleware(PromiseMiddleWare)(createStore)

ReactDOM.render(

   <Provider store={createStoreMiddeleWrare(Reducers)}>
  
  
   <BrowserRouter history={history}>
  
      <Route exact path="/" component={App} />
      
      </BrowserRouter>
  
   </Provider>
     
  
  
    
  
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
