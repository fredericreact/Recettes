export const LOGIN_INPUT_CHANGE ='LOGIN_INPUT_CHANGE';
export const LOGIN_INPUT_SUBMIT ='LOGIN_INPUT_SUBMIT';
export const LOGIN_INPUT_LOGOUT ='LOGIN_INPUT_LOGOUT';
export const LOGIN_SUCCESS ='LOGIN_SUCCESS';
export const LOGIN_ERROR ='LOGIN_ERROR';
export const CHECK_AUTH ='CHECK_AUTH';
export const LOGOUT_SUCCESS ='LOGOUT_SUCCESS';
export const LOGOUT_ERROR ='LOGOUT_ERROR';


export const checkAuth =() => ({
type:CHECK_AUTH,
})

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

export const loginInputLogout = () => ({
    type:LOGIN_INPUT_LOGOUT,
})

export const logoutSuccess = () => ({
    type:LOGOUT_SUCCESS,
})

export const logoutError = () => ({
    type:LOGOUT_ERROR,
})