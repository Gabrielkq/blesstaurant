import { connect } from 'react-redux';
import { deleteReview } from '../redux/actionCreators'
import Button from './Button'
import { render } from '@testing-library/react';

const Review = ({review, userId, deleteReview}) => {

       return (
           <div className="review">
                <p className="rev"> {review.content}
                <br></br>
                rating: {("⭐️").repeat(review.rating)}
                <br></br>
                                   as reviewed by: {review.user.username}
                </p>
                <div className="delete-button">
                {(userId === review.user_id) && <Button onClick={()=> deleteReview(review.id)} text={'delete your review'}/>}
                </div>
            </div>
        );
    
}

export default connect(null, { deleteReview })(Review);