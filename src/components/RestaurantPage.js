import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewModalForm from './ReviewModalForm';
import ReviewContiner from '../containers/ReviewContainer';
import { getYelpRestaurant, findBackEndRestaurant, clearRestaurantPage, toggleModal } from '../redux/actionCreators';

class RestaurantPage extends Component {

    componentDidMount(){
        this.props.getYelpRestaurant(this.props.match.params.id)
        this.props.findBackEndRestaurant(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearRestaurantPage()
    }

    render() {
        console.log("tile props", this.props)
        const { redirect, history, toggleModal } = this.props
        const { name, location, image_url, photos } = this.props.yelpRestaurant
        return (
            <div>
                <ReviewModalForm/>
                <div id="leftside">
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
                    <iframe title="map" width="600" height="450" 
                    frameborder="0" style={{border:0}}
                    src={`https://www.google.com/maps/embed/v1/search?q=${name},${location.display_address && location.display_address[0]},${location.display_address && location.display_address[1] }.&key=${process.env.REACT_APP_API_KEY}`} 
                    allowfullscreen></iframe>
                    <img src={image_url} alt={name} width="500" />
               
                </>
                 }
                </div>
                <div id="rightside">
                    <ReviewContiner/>
                </div>

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


export default connect(msp, { getYelpRestaurant, findBackEndRestaurant, clearRestaurantPage, toggleModal } )(RestaurantPage);