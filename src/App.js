// import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import { Component } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RestaurantTiles from './containers/RestaurantTiles';
import RestaurantPage from './components/RestaurantPage';
import { autoLogin } from './redux/actionCreators';
import { connect } from 'react-redux';
import NotFound from './components/NotFound'
import EasterEgg from './components/EasterEgg';


class App extends Component {
    
  componentDidMount(){
      const token = localStorage.token
      if (token){
        this.props.autoLogin(token)
      } 

  }

  state = {
    easterEgg: 0
  }

  easterEggFurtherAway = (event) => {
    if(event.keyCode === 65 || event.keyCode === 89 || event.keyCode === 79) {
      this.setState({
        easterEgg: this.state.easterEgg - 1
      })
     }
  }

  easterEggGetttingCloser = (event) => {
    if(!event.repeat) {
      if(event.keyCode === 65 || event.keyCode === 89 || event.keyCode === 79) {
        this.setState({
          easterEgg: this.state.easterEgg + 1
         })
       }
     }
  }

  render(){
    document.addEventListener("keydown", this.easterEggGetttingCloser, false);
    document.addEventListener("keyup", this.easterEggFurtherAway, false);
    return (
      <div className="App">
          <NavBar history={this.props.history} />
         {(this.state.easterEgg === 3) && <EasterEgg/>}
             <Switch>
               <Route path="/login" render={() => <Login history={this.props.history} />} />
               <Route path="/signup" render={() => <Signup history={this.props.history} />} />
               <Route path="/restaurants/:id" render={({ match }) => <RestaurantPage match={match} history={this.props.history }  key={window.location.pathname} />}/> 
               <Route exact path="/restaurants" render={() => <RestaurantTiles  />} />
               <Route exact path="/" render={() => <Home />}/>
               <Route path="/" component={NotFound} />
             </Switch>
             
      </div>
  );
  }
};

export default connect( null, { autoLogin })(App);
