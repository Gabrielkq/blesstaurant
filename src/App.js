// import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import RestaurantTiles from './containers/RestaurantTiles';
import RestaurantTile from './containers/RestaurantTile';

class App extends Component {
  
    state = {
      user_id: null
    }

    componentDidMount(){
      const token = localStorage.token
      if (token){
        fetch("http://localhost:3000/auto_login", {
          headers: {
            "Authorization": token
          }
        })
        .then(r => r.json())
        .then(res => { 
          if (res.errors){
            console.log(res.errors)
          } else {
            this.setState({
              user_id: res.id
            })
          }
        })
      }
     
    }

  setToken = data => {
    localStorage.token = data.token

    fetch(`http://localhost:3000/users/${data.user_id}`)
      .then(r => r.json())
      .then()
    this.setState({
    //  token: data.token,
      user_id: data.user_id
    //  loggedIn: true
    },() =>this.props.history.push("/"))
  }

  logout = () => {
    this.setState({
      user_id: null
    }, () => {
      localStorage.removeItem("token")
    })
  }

  render(){

    return (
    <div className="App">
      {this.state.user_id && <button onClick={this.logout} >logout</button>}
      <NavBar />
      <RestaurantTiles/>
      <Switch>
        <Route path="/login" render={() => <Login setToken={this.setToken} />} />
        <Route path="/signup" render={() => <Signup setToken={this.setToken} />} />
        <Route path="/restaurants/:id" render={({ match }) => <RestaurantTile match={match}/>}/>
        <Route exact path="/" render={() => <Home user_id={this.state.user_id}/>}/>
      </Switch>

    </div>
  );
  }
};

export default App;
