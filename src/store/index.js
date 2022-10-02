import {createStore, compose, applyMiddleware} from 'redux';
import ajaxMiddleware from '../middleware/ajaxMiddleware';


import rootReducer from '../reducers/index'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
ajaxMiddleware
    // logMiddleware,
    
    
  ),
 
);

const store = createStore(
    rootReducer,   enhancers
)

console.log(store.getState());

export default store

