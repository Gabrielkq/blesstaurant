import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                 {this.props.user_id && <h2>Hello user id #{this.props.username}</h2>}
                   <p>
          Blesstaurant 🌶
        </p>
            </div>
        );
    }
}

export default Home;