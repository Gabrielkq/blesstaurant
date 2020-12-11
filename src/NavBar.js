// const { ReactComponent } = require("*.svg");

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

class NavBar extends Component {
    render() {
        return (
            <div>
            
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/Signup">Sign up</NavLink>
                <Search />

            </div>
        );
    }
}

export default NavBar;