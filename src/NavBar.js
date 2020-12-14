// const { ReactComponent } = require("*.svg");

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

class NavBar extends Component {
    render() {
        return (
            <div>
            
                <NavLink to="/Home">Home</NavLink>
             
                {this.props.user_id 
                ?   
                 <button onClick={this.props.logout} >logout {this.props.username}</button>
                :
                <>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/Signup">Sign up</NavLink>
                </>
                }
                <Search history={this.props.history}/>

            </div>
        );
    }
}

export default NavBar;