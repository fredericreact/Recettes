import { FETCH_RECIPES, fetchRecipesSuccess,fetchRecipesError } from "../actions/recipes";
import axios from 'axios';

export default (store) => (next) => (action)  => {
    next(action);

    const {dispatch} = store;

console.log('passe par middleware')
    switch(action.type) {
        case FETCH_RECIPES:
        axios ({
            method: 'get',
            url: 'http://localhost:3001/recipes',
        })

        .then((res)=>{
            
            const {data} = res;
            console.log(data);
            dispatch(fetchRecipesSuccess(data))
        })

        .catch((err) =>{
            console.log(err);
            dispatch(fetchRecipesError())
        })

        break;
        
        default:
        break;
    }
}