import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewModalForm from './ReviewModalForm';
import { getYelpRestaurant, findBackEndRestaurant, clearYelp, toggleModal } from '../redux/actionCreators';

class RestaurantTile extends Component {

    componentDidMount(){
        this.props.getYelpRestaurant(this.props.match.params.id)
        this.props.findBackEndRestaurant(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearYelp()
    }

    render() {
        console.log("tile props", this.props)
        const { redirect, history, toggleModal } = this.props
        const { name, location, image_url, photos } = this.props.yelpRestaurant
        return (
            <div>
                <ReviewModalForm/>
                {redirect
                 ?  
                    <div><p>404 not found</p></div> 
                 :
                <>
                     <h1>{name}</h1>
                     <button onClick={() => history.push("/restaurants")}>go back to search results</button>
                     <button onClick={toggleModal}>add a review</button>
                    {location.display_address &&
                        <p>{ location.display_address[0]}, { location.display_address[1]} { location.display_address[2]} </p>    
                    }
                    <p></p>
                    <img src={image_url} alt={name}/>
                    <img src={photos[1]} alt={name}/>
                    <img src={photos[2]} alt={name}/>
                </>
                 }
            </div>
        );
    }
}

const msp = state =>({
    yelpRestaurant: state.restaurants.yelpRestaurant,
    redirect: state.restaurants.redirect,
    restaurantInBackEnd: state.restaurants.restaurantInBackEnd,
    restaurantId: state.restaurants.restaurantId
})


export default connect(msp, { getYelpRestaurant, findBackEndRestaurant, clearYelp, toggleModal } )(RestaurantTile);