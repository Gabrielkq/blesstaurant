import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, addReviewOnly, addRestaurantandReview } from '../redux/actionCreators';
import { Link } from 'react-router-dom';

class ReviewModalForm extends Component {

    state = {
        content: "",
        rating: 5,
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { displayModal, toggleModal, userId, restaurantId, addReviewOnly, addRestaurantandReview, yelpId, name } = this.props
        const display = displayModal ? "block" : "none"
        return (
            <div id="myModal" className="modal" style={{display}}>
                 <div className="modal-content">
                    <span className="close" onClick={toggleModal}>&times;</span>
                    {!userId 
                    ?
                    <p><Link to="/signup">Sign up</Link> or <Link to="/login">Login</Link> to review this restaurant</p>
                    :
                            <form 
                                onSubmit={(e) => !restaurantId ? addRestaurantandReview(e, name, yelpId, this.state.content, this.state.rating, userId) : addReviewOnly(e, this.state.content, this.state.rating, userId, restaurantId) }>
                            <label>
                              Review:
                              <textarea placeholder="add review here" name="content" value={this.state.content} onChange={this.handleChange} />
                            </label>
                            <br/>   
                            <label>
                                Rating:
                                <input type="number" name="rating" value={this.state.rating} min="1" max="5" onChange={this.handleChange} />
                              </label>
                            <input type="submit" value="Submit" />
                          </form>
                          
                    }
                </div>
            </div>    
        );
    }
}

const msp = state => ({
    displayModal: state.restaurants.displayModal,
    userId: state.user.userId,
    restaurantId: state.restaurants.restaurantId,
    yelpId: state.restaurants.yelpRestaurant.id,
    name: state.restaurants.yelpRestaurant.name
})

export default connect(msp, { toggleModal, addReviewOnly, addRestaurantandReview })(ReviewModalForm);