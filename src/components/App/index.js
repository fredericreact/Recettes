// == Import npm
import React from 'react';
import Recipe from '../Recipe'
import data from '../../data'
import Home from '../Home'
import Navigation from '../Navigation';
import './style.css'
import slugify from 'slugify';
import {Route} from 'react-router-dom'
const navList = data.map((dataObject)=>({
  id:dataObject.id,
  title:dataObject.title,
  slug:`/recipe/${slugify(dataObject.title,{lower:true})}`,
}))

const homeData = data.map((dataObject)=>({
  id:dataObject.id,
  title:dataObject.title,
  slug:`/recipe/${slugify(dataObject.title,{lower:true})}`,
  image: dataObject.thumbnail,
  difficulty:dataObject.difficulty,
}))

// == Composant
const App = () => {
console.log(data);
return (
  <div className="app" >
   
    <Navigation list={navList}/>
    <main className='main'>
    <header className="header">oRecipe</header>
    <Route exact path="/">
    <Home list={homeData}/>
    </Route>

    <Route path="/recipe/:slug">
    <Recipe recipe={data[0]}></Recipe>
    </Route>

   
    
    </main>
  </div>
);
}
// == Export
export default App;