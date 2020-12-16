import { NavLink } from 'react-router-dom';
import Search from './Search';
import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators'

const NavBar = ({logout, username, history }) => {
   return (
            <div>
                <NavLink to="/Home">Home</NavLink>
                {username
                ?   
                 <button onClick={logout} >logout {username}</button>
                :
                <>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/Signup">Sign up</NavLink>
                </>
                }
                <Search history={history}/>
            </div>
        );
}

const msp = state => ({
    username: state.user.username
})

export default connect(msp, {logout})(NavBar);