import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setToken } from '../redux/actionCreators'

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
             })
         })
         .then(r => r.json())
         .then(response =>{
             if (response.errors){
                 alert(response.errors)
             } else {
              this.props.setToken(response)
              this.props.history.push("/")
              this.setState({
                username: "",
                password: ""    
              })
             }
         })
       
    }

    render() {
        return (
            <div className="login">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
                <label>
                 Name:
                  <input onChange={this.onChange} type="text" name="username" value={this.state.username}/>
                </label>
                <label><br></br>
                 Password:
                  <input onChange={this.onChange} type="password" name="password" value={this.state.password}/>
                </label><br></br>
                  <input type="submit" value="Submit"/>
            </form>
            </div>
        );
    }
}

export default connect(null, {setToken})(Login);