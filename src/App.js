// import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import { Component } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RestaurantTiles from './containers/RestaurantTiles';
import RestaurantTile from './components/RestaurantTile';
import {autoLogin} from './redux/actionCreators';
import { connect } from 'react-redux';

class App extends Component {
    
  componentDidMount(){
      const token = localStorage.token
      if (token){
        this.props.autoLogin(token)
      } 
  }

  render(){
   console.log("in app:", this.props)
    return (
      <div className="App">
          <NavBar history={this.props.history} />
             <Switch>
               <Route path="/login" render={() => <Login history={this.props.history} />} />
               <Route path="/signup" render={() => <Signup history={this.props.history} />} />
               <Route path="/restaurants/:id" render={({ match }) => <RestaurantTile match={match} history={this.props.history}/>}/> 
               <Route exact path="/restaurants" render={() => <RestaurantTiles/>} />
               <Route exact path="/" render={() => <Home />}/>
             </Switch>
      </div>
  );
  }
};

export default connect( null, {autoLogin})(App);
