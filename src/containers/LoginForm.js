import { connect, createDispatchHook } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginInputChange, loginInputSubmit } from '../actions/user-actions';

const mapState = (state)=>({
email:state.user.email,
password:state.user.password,
isLogged: state.user.isLogged,
loggedMessage:state.user.loggedMessage,
loading: state.user.loading,
});

const mapDispatch = (dispatch)=>({
   changeField:(value,name) => {
    const object = {
        [name] : value,
    }
    dispatch(loginInputChange(object));
   },
  handleLogin:()=>{
    dispatch(loginInputSubmit());
  },
  handleLogout:()=>{
    console.log('logout');
  },



});

export default connect(mapState, mapDispatch)(LoginForm);