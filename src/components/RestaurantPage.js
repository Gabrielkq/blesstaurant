import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewModalForm from './ReviewModalForm';
import ReviewContainer from '../containers/ReviewContainer';
import NotFound from './NotFound'
import { getYelpRestaurant, findBackEndRestaurant, clearRestaurantPage, openModal, closeModal} from '../redux/actionCreators';
import Button from './Button'

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
        const { name, location, image_url, display_phone} = this.props.yelpRestaurant
        return (
            <div id="rest-page">
                <ReviewModalForm/>
                
                {redirect
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
                        <img className="restImg" src={image_url} alt={name} width="500" />
                    </div>
                    <iframe className="map" title="map" width="550" height="400" 
                    frameBorder="0" style={{border:0}}
                    src={`https://www.google.com/maps/embed/v1/search?q=${name},${location.display_address[0]},${location.display_address[1] }.&key=${process.env.REACT_APP_API_KEY}`} 
                    allowFullScreen></iframe>
                    </div>
                    </div>
                   
                </>
                 }
                
                 <p>Reviews:</p>
                    <ReviewContainer/>
             

            </div>
        );
    }
}

const msp = state =>({
    yelpRestaurant: state.restaurants.yelpRestaurant,
    redirect: state.restaurants.redirect,
    restaurantId: state.restaurants.restaurantId,
})


export default connect(msp, { getYelpRestaurant, findBackEndRestaurant, clearRestaurantPage, openModal, closeModal} )(RestaurantPage);