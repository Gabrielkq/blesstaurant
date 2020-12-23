import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div id="home">
                 {this.props.userId && <h2>Many Blessings to you, {this.props.username}</h2>}
                   <p id="blessed">
          Blesstaurant 🌱
        </p>
   
        <p>A one stop resource to find vegan food all over the world. </p>
        <p>Enter a location into the search field and we'll find you places where they serve ethical plant based treats. Yummy! 😀</p>
        <p> Read reviews from other vegans to find the tasiest places and other recommendations!</p>
            </div>
        );
    }
}

const msp = state =>({
    userId: state.user.userId,
    username: state.user.username
})

export default connect(msp)(Home);