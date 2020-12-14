import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getYelpRestaurant, findBackEndRestaurant, clearYelp } from '../redux/actionCreators';

class RestaurantTile extends Component {



    componentDidMount(){
        this.props.getYelpRestaurant(this.props.match.params.id)
        this.props.findBackEndRestaurant(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearYelp()
    }

    existingRestaurant = () => {
        fetch('http://localhost:3000/existing_restaurant', {
            headers: {
              'Yelp-Id': `${this.props.yelpRestaurant.id}`
                }
            })
          .then(r => r.json())
          .then(obj => alert(obj.restaurant_id))
    }

    render() {
        console.log("tile props", this.props)
        return (
            <div>
                 {this.props.redirect
                 ? <div><p>404 not found</p></div> 
                :<>
                <h1>{this.props.yelpRestaurant.name}</h1>
                <button onClick={() => this.props.history.push("/restaurants")}>go back to search results</button>
                 {this.props.yelpRestaurant.location.display_address &&  <p>{ this.props.yelpRestaurant.location.display_address[0]} { this.props.yelpRestaurant.location.display_address[1]}</p>    }
                <button onClick={this.existingRestaurant}>is this in the backend?</button>

                <img src={this.props.yelpRestaurant.image_url} alt={this.props.yelpRestaurant.name}/>
                </>}
                 </div>
        );
    }
}

const msp = state =>({
    yelpRestaurant: state.restaurants.yelpRestaurant,
    redirect: state.restaurants.redirect,
    inBackEnd: state.restaurants.inBackEnd,
    backEndId: state.restaurants.backEndId
})


export default connect(msp, { getYelpRestaurant, findBackEndRestaurant, clearYelp } )(RestaurantTile);