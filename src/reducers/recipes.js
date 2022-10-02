import data from "../data";
import slugify from 'slugify';

const slugifyTitle =(titre) =>`/recipe/${slugify(titre,{lower:true})}`

const initialState ={

    list:data,
}

const reducer =(state=initialState,action={}) => {
    switch(action.type){

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

export default reducer;