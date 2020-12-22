import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div id="home">
                 {this.props.userId && <h2>Many Blessings to you, {this.props.username}</h2>}
                   <p>
          Blesstaurant 🌱
        </p>
        <br>
        </br>
        <p>Search anywhere in the world to find vegan food. </p>
        <p> Read reviews from other vegan to find the tasiest places to eat!</p>
            </div>
        );
    }
}

const msp = state =>({
    userId: state.user.userId,
    username: state.user.username
})

export default connect(msp)(Home);