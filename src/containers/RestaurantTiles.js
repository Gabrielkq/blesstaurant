import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantTiles extends Component {

    // renderYelpResults = () =>{
    //     this.props.restaurants.restaurants.map(r =>{
    //         return (<li>{r.name}</li>)
    //     })
    // }

    render() {
        console.log("in tiles: ", this.props.restaurants.restaurants)
        return (
            <div>
                here are the restaurants from yelp 
               <ul>
               {this.props.restaurants.map(r => <Link to={`/restaurants/${r.id}`}> <li>{r.name}</li></Link>)
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