import { FETCH_RECIPES_SUCCESS } from '../actions/recipes';
import slugify from 'slugify';

const slugifyTitle =(titre) =>`/recipe/${slugify(titre,{lower:true})}`

const initialState ={

    list:[],
}

const reducer =(state=initialState,action={}) => {
    switch(action.type){
        case FETCH_RECIPES_SUCCESS:
            return{
                ...state,
                list:[...action.payload],
            }
        default:
            return state;
    }
}

export  const getNavFromRecipes = (recipes) => ( recipes.map((dataObject)=>({
        id:dataObject.id,
        title:dataObject.title,
        slug:slugifyTitle(dataObject.title),
      })));
    
  
export const findRecipeFromSlug =(recipes,url) =>( 
    recipes.find((recipeObject)=> slugifyTitle(recipeObject.title) === url
    )
    );


    export const getHomeCards = (recipes) => recipes.map((dataObject) => ({
        id: dataObject.id,
        title: dataObject.title,
        slug: slugifyTitle(dataObject.title),
        image: dataObject.thumbnail,
        difficulty: dataObject.difficulty,
      }));
    
export default reducer;