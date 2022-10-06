export const LOGIN_INPUT_CHANGE ='LOGIN_INPUT_CHANGE';
export const LOGIN_INPUT_SUBMIT ='LOGIN_INPUT_SUBMIT';
export const LOGIN_INPUT_LOGOUT ='LOGIN_INPUT_LOGOUT';
export const LOGIN_SUCCESS ='LOGIN_SUCCESS';
export const LOGIN_ERROR ='LOGIN_ERROR';

export const loginSuccess = (payload) => ({
    type:LOGIN_SUCCESS,
    payload,
})

export const loginError = () => ({
    type:LOGIN_ERROR,
})


export const loginInputChange = (payload) => ({
    type:LOGIN_INPUT_CHANGE,
    payload,
})


export const loginInputSubmit = () => ({
    type:LOGIN_INPUT_SUBMIT,
})

export const fetchRecipesLogout = () => ({
    type:LOGIN_INPUT_LOGOUT,
})