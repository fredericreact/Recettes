// == Import npm
import React from 'react';
import Recipe from '../../containers/Recipe'
import data from '../../data'
import Home from '../Home'
import Navigation from '../../containers/Navigation';
import './style.css'
import slugify from 'slugify';
import {Route} from 'react-router-dom';


const slugifyTitle =(titre) =>`/recipe/${slugify(titre,{lower:true})}`



const homeData = data.map((dataObject)=>({
  id:dataObject.id,
  title:dataObject.title,
  slug:slugifyTitle(dataObject.title),
  image: dataObject.thumbnail,
  difficulty:dataObject.difficulty,
}))

// == Composant
const App = () => {
console.log(data);
return (
  <div className="app" >
   
    <Navigation />
    <main className='main'>
    <header className="header">oRecipe</header>
    <Route exact path="/">
    <Home list={homeData}/>
    </Route>

    
    <Route path="/recipe/:slug" component={Recipe}/>
    </main>
  </div>
);
}
// == Export
export default App;