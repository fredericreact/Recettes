// == Import npm
import React from 'react';
import Recipe from '../Recipe'
import data from '../../data'


// == Composant
const App = () => {
console.log(data);
return (
  <div className="app" >
    
    <Recipe recipe={data[0]}></Recipe>
  </div>
);
}
// == Export
export default App;