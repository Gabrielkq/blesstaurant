import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                 {this.props.userId && <h2>Hello user id #{this.props.username}</h2>}
                   <p>
          Blesstaurant 🌶
        </p>
            </div>
        );
    }
}

const msp = state =>({
    userId: state.user.userId,
    username: state.user.username
})

export default connect(msp)(Home);