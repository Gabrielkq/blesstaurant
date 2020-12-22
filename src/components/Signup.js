import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setToken} from '../redux/actionCreators';

class Signup extends Component {

    state = {
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {username, password, passwordConfirmation} = this.state;
        if (password === passwordConfirmation){
                fetch(`http://localhost:3000/users`, {
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
                    }
                })
                
                this.setState({
                    username: "",
                    password: "",
                    passwordConfirmation: ""
                })  
        } else {
            alert('yo pazzwerdz dunt match')
        }
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div className="login">
            <h1>Enter to get Blessed</h1>
            <form onSubmit={this.onSubmit}>
                <label>
                 Enter Your Username:
                  <input onChange={this.onChange} type="text" name="username" value={this.state.username}/>
                </label>
                <br></br>
                <label>
                 Enter Your Password:
                  <input onChange={this.onChange} type="password" name="password" value={this.state.password}/>
                </label>
                <br></br>
                <label>
                 Re-Enter Your Password:
                  <input onChange={this.onChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation}/>
                </label>
                <br></br>
                  <input type="submit" value="Submit"/>
            </form>
            </div>
        );
    }
}

export default connect(null, {setToken})(Signup);