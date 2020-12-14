import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantTiles extends Component {

    render() {
        return (
            <div>
                here are the restaurants from yelp 
               <ul>
               {this.props.restaurants.map(r => console.log("in map:", r) || 
               r.none
               ? 
                <h3>No Results Found, Try Another Search</h3>
               :
               <><Link to={`/restaurants/${r.id}`}> <li>{r.name}</li></Link></>)
               }
                </ul>
                </div>
        );
    }

}

const msp = state =>({
    restaurants: state.restaurants.yelpResults
})

export default connect(msp)(RestaurantTiles);