import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';


const mapState = (state)=>({
email:state.user.email,
password:state.user.password,
isLogged: state.user.isLogged,
loggedMessage:state.user.loggedMessage,
});

const mapDispatch = (dispatch)=>({
   changeField:(value,name) => {
    console.log('changeField',value,name)
   },
  handleLogin:()=>{
    console.log('login');
  },
  handleLogout:()=>{
    console.log('logout');
  },



});

export default connect(mapState, mapDispatch)(LoginForm);