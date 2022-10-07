import { FETCH_RECIPES, fetchRecipesSuccess,fetchRecipesError } from "../actions/recipes";
import {LOGIN_INPUT_SUBMIT, 
    loginSuccess, 
    loginError, 
    CHECK_AUTH, 
    LOGIN_INPUT_LOGOUT,
logoutSuccess,
logoutError} from '../actions/user-actions'

import axios from 'axios';

export default (store) => (next) => (action)  => {
    next(action);

    const {dispatch} = store;

console.log('passe par middleware')
    switch(action.type) {
        case LOGIN_INPUT_LOGOUT:
            axios({
                method: 'post',
                url: 'http://localhost:3001/logout',
                withCredentials:true,
            })
            .then((res)=>{
                const {data} = res;
               console.log(data);
               dispatch(logoutSuccess());
            })
            .catch((err)=>{
                console.log(err);
                dispatch(logoutError());
            })
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
                withCredentials: true,
                data:{
                    email:store.getState().user.email,
                    password:store.getState().user.password,
                }
            })
    
            .then((res)=>{
                const serverResponse = res.data;
                dispatch(loginSuccess(serverResponse));
            })
    
            .catch((err) =>{
                console.log(err);
                dispatch(loginError());
            })

        break;

        case CHECK_AUTH:
            axios({
                method:'post',
                url:'http://localhost:3001/isLogged',
                withCredentials:true,
            })
            .then((res)=>{
                const {data} = res;
                if(data.logged){
                dispatch(loginSuccess(data));
            }
            })
            .catch((err)=>{
                console.log(err);
            });
            break;
        default:
        break;
    }
}