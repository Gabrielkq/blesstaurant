import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantTiles extends Component {

    render() {
        return (
            <div>
               {this.props.restaurants.map(restaurant => (
               restaurant.none
               ? 
                <h3>No Results Found, Try Another Search</h3>
               :
               <>
                    <div>
                        <Link to={`/restaurants/${restaurant.id}`}> <p>{restaurant.name}</p></Link>
                        <img src={restaurant.image_url} alt={restaurant.name}/>
                    </div>
                </>)
                )
                }
                </div>
        );
    }

}

const msp = state =>({
    restaurants: state.restaurants.yelpResults
})

export default connect(msp)(RestaurantTiles);