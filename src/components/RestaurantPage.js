import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewModalForm from './ReviewModalForm';
import ReviewContainer from '../containers/ReviewContainer';
import NotFound from './NotFound'
import { getYelpRestaurant, findBackEndRestaurant, clearRestaurantPage, openModal, closeModal } from '../redux/actionCreators';
import Button from './Button';
import Carousel from 'nuka-carousel';

class RestaurantPage extends Component {

    componentDidMount(){
        this.props.getYelpRestaurant(this.props.match.params.id)
        this.props.findBackEndRestaurant(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearRestaurantPage()
        this.props.closeModal()
    }

    render() {
        const { redirect, history, openModal } = this.props
        const { name, location, display_phone, photos} = this.props.yelpRestaurant
        return (
            <div id="rest-page">
                <ReviewModalForm/>
                
                {!!redirect
                 ?  
                    <NotFound/>
                 :
                <>

                     <h1>{name} </h1>
                        <p>{ location.display_address[0]}, { location.display_address[1]} { location.display_address[2]} </p>    
                        <p>{display_phone}</p>
                      <div className="keep-in-row">  <Button onClick={() => history.push("/restaurants")} text={`go back to search results`} />
                     <Button onClick={openModal} text={`add a review`}/>
                     </div>                
                    <div>
                    <div className="keep-in-row">
                    <div className="square">
                        <Carousel>
                            <img src={photos[0]} alt="restaraunt one" />
                            <img src={photos[1]} alt="restaraunt two"/>
                            <img src={photos[2]} alt="restaraunt three"/>
                         </Carousel>    
                    </div>
       
                    <iframe className="map" title="map" width="550" height="400" 
                    frameBorder="0" style={{border:0}}
                    src={`https://www.google.com/maps/embed/v1/search?q=${name},${location.display_address[0]},${location.display_address[1] }.&key=${process.env.REACT_APP_API_KEY}`} 
                    allowFullScreen></iframe>
                    </div>
                    </div>
                   
                </>
                 }
                
                 {!redirect && <p>Reviews:</p>}
                    <ReviewContainer redirect={redirect}/>
             

            </div>
        );
    }
}

const msp = state =>({
    yelpRestaurant: state.restaurants.yelpRestaurant,
    redirect: state.restaurants.redirect,
    restaurantId: state.restaurants.restaurantId
})


export default connect(msp, { getYelpRestaurant, findBackEndRestaurant, clearRestaurantPage, openModal, closeModal} )(RestaurantPage);