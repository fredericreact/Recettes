import {createStore} from 'redux';


import rootReducer from '../reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const enhancers = composeEnhancers(

 
);

const store = createStore(
    rootReducer,   enhancers
)

console.log(store.getState());

export default store