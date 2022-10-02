// == Import npm
import React ,{useEffect} from 'react';
import Recipe from '../../containers/Recipe'
import Home from '../../containers/Home'
import Navigation from '../../containers/Navigation';
import './style.css'
import {Route} from 'react-router-dom';

import Error from '../../containers/Error'

// == Composant
const App = ({fetchRecipes}) => {
useEffect(fetchRecipes,[])
return (
  <div className="app" >
   
    <Navigation />
    <main className='main'>
    <header className="header">oRecipe</header>
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