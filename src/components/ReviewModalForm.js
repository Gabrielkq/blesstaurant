import { connect } from 'react-redux';
import { closeModal, addReviewOnly, addRestaurantandReview, handleContent, handleRating} from '../redux/actionCreators';
import { Link } from 'react-router-dom';


const ReviewModalForm  = ({displayModal, closeModal, userId, restaurantId, 
                            addReviewOnly, addRestaurantandReview,
                             yelpId, name, content, rating, handleContent, handleRating }) => {

    const display = displayModal ? "block" : "none"
        return (
            <div id="myModal" className="modal" style={{display}}>
                 <div className="modal-content">
                    <span className="close" onClick={closeModal} >close &times;</span>
                    {!userId 
                    ?
                    <p><Link to="/signup">Sign up</Link> or <Link to="/login">Login</Link> to review this restaurant</p>
                    :
                            <form 
                                onSubmit={(e) => !content 
                                                    ? e.preventDefault(alert('review field cannot be blank')) 
                                                    : !restaurantId 
                                                        ? addRestaurantandReview(e, name, yelpId, content, rating, userId)
                                                        : addReviewOnly(e, content, rating, userId, restaurantId) }>
                            
                              <textarea rows="10" placeholder="type your review here" name="content" value={content} onChange={handleContent} />
                           
                            <br/>   
                            <label>
                                Rating:
                                <input type="number" name="rating" value={rating} min="1" max="5" onChange={handleRating} />
                              </label>
                            <input type="submit" value="Submit" />
                          </form>
                          
                    }
                </div>
            </div>    
        );
    }


const msp = state => ({
    displayModal: state.restaurants.displayModal,
    userId: state.user.userId,
    restaurantId: state.restaurants.restaurantId,
    yelpId: state.restaurants.yelpRestaurant.id,
    name: state.restaurants.yelpRestaurant.name,
    content: state.reviews.newReviewContent,
    rating: state.reviews.newReviewRating
})


export default connect(msp, { closeModal, addReviewOnly, addRestaurantandReview, handleContent, handleRating })(ReviewModalForm);