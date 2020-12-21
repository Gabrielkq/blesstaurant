import { NavLink } from 'react-router-dom';
import Search from './Search';
import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators'
import Button from './Button.js';

const NavBar = ({logout, username, history }) => {
   return (
            <div>
                <NavLink to="/Home">Home</NavLink>
                {username
                ?   
                 <Button onClick={logout} text={`logout ${username}`} />
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