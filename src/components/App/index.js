// == Import npm
import React ,{useEffect, useInsertionEffect} from 'react';
import Recipe from '../../containers/Recipe'
import Home from '../../containers/Home'
import Navigation from '../../containers/Navigation';
import './style.css'
import {Route} from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import Error from '../../containers/Error'

// == Composant
const App = ({fetchRecipes, checkAuth}) => {


useEffect(()=>{
  checkAuth();
  fetchRecipes();

},[]);

return (
  <div className="app" >
   
    <Navigation />
    <main className='main'>
    <header className="header">oRecipe 

    <LoginForm
       
    />
    
    </header>


    <Error/>
    <Route exact path="/">
    <Home />
    </Route>

    
    <Route path="/recipe/:slug" component={Recipe}/>
    </main>
  </div>
);
}
// == Export
export default App;