import { connect } from 'react-redux';
import { deleteReview } from '../redux/actionCreators'

const Review = ({review, userId, deleteReview}) => {
       return (
            review.user.username && <div className="review">
                <p>{review.user.username}: {review.content}</p>
                <p>rating: {("⭐️").repeat(review.rating)}</p>
                {(userId === review.user_id) && <button onClick={()=> deleteReview(review.id)}>delete your review</button>}
            </div>
        );
    }

const msp = state => ({
    userId : state.user.userId
})

export default connect(msp, {deleteReview})(Review);