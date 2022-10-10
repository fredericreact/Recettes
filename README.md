# slugify

```javascript
npm i slugify
```

# Router

Route a mon container Recipe en tant que props et lui donne des props 


```javascript
 <Route path="/recipe/:slug" component={Recipe}/>
```

```javascript
import {connect} from 'react-redux';
import Recipe from '../components/Recipe';
import {findRecipeFromSlug} from '../reducers/recipes';
 
const mapState = (state, ownProps) => {
    console.log(ownProps);
    const {url} = ownProps.match;
return ({
    recipe: findRecipeFromSlug(state.recipes.list, url),
});
 
}
const mapDispatch = null;
 
export default connect (mapState, mapDispatch)(Recipe);
```

# 'Finished' commit bug

2 errors : 

1. Error component export

2. Recipe component props 

![image](https://user-images.githubusercontent.com/104289891/194799872-e147d6cc-6d59-4ee3-a74c-ce76a8520585.png)


# Sessions

![image](https://user-images.githubusercontent.com/104289891/194800303-fe131530-b1b1-471d-8bff-99d37371422c.png)
