import { FETCH_RECIPES, fetchRecipesSuccess,fetchRecipesError } from "../actions/recipes";
import {LOGIN_INPUT_SUBMIT} from '../actions/user-actions'
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
        case LOGIN_INPUT_SUBMIT:
            axios ({
                method: 'post',
                url: 'http://localhost:3001/login',
                data:{
                    email:store.getState().user.email,
                    password:store.getState().user.password,
                }
            })
    
            .then((res)=>{
                const serverResponse = res.data;
                console.log(serverResponse);
            })
    
            .catch((err) =>{
                console.log(err);
        
            })
        default:
        break;
    }
}