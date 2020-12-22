import { Link } from 'react-router-dom';
import Search from './Search';
import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators'
import Button from './Button.js';

const NavBar = ({logout, username, history }) => {
   return (
            <div>
             
                {username
                ?   
                 <Button onClick={logout} text={`logout ${username}`} />
                :
                <>
                <div className="keep-in-row">
                <Link to="/Login"><Button  text={"Login"}/></Link>
                <Link to="/Signup"><Button  text={"Sign up"}/></Link>
                </div>
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