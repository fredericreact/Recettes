import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRecipes } from '../actions/recipes';
import { checkAuth } from '../actions/user-actions';

const mapState = null;

const mapDispatch = (dispatch)=>({
    fetchRecipes: () =>{
        console.log('get data');
        dispatch(fetchRecipes());
    },
    checkAuth: ()=>{
        dispatch(checkAuth());
    }

});

export default connect(mapState, mapDispatch)(App);