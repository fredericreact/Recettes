import {LOGIN_INPUT_CHANGE,LOGIN_INPUT_SUBMIT,LOGIN_SUCCESS,LOGIN_ERROR,LOGOUT_SUCCESS} from '../actions/user-actions'
const initialState ={
    loading: false,
    email:"bouclierman@herocorp.io",
    password:"jennifer",
    isLogged:false,
    loggedMessage:"salut",
    pseudo:'',
}

const user =(state=initialState,action={}) => {
    switch(action.type){
        case LOGOUT_SUCCESS:
            return{
                ...state,
                isLogged: false,
                pseudo: '',
                loggedMessage:'',
            }

        case LOGIN_INPUT_CHANGE:
            return{
                ...state,
                ...action.payload,
            };
        case LOGIN_INPUT_SUBMIT:
            return{
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                isLogged: true,
                pseudo: action.payload.pseudo,
                loggedMessage:`Bienvenue ${action.payload.pseudo}`,
            };

        case LOGIN_ERROR:
            return{
                ...state,
              loading:false,
              isLogged:false,
              pseudo:'',
              loggedMessage:'',
            };
        default:
            return state;
    }
}


    
export default user;