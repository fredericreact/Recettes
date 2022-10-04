import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginInputChange } from '../actions/user-actions';

const mapState = (state)=>({
email:state.user.email,
password:state.user.password,
isLogged: state.user.isLogged,
loggedMessage:state.user.loggedMessage,
});

const mapDispatch = (dispatch)=>({
   changeField:(value,name) => {
    const object = {
        [name] : value,
    }
    dispatch(loginInputChange(object));
   },
  handleLogin:()=>{
    console.log('login');
  },
  handleLogout:()=>{
    console.log('logout');
  },



});

export default connect(mapState, mapDispatch)(LoginForm);