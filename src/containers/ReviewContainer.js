import Review from '../components/Review';
import { connect } from 'react-redux';

const ReviewContainer = ({ reviews, userId }) => {
        return (
            <div>
                {reviews.map(review => <Review review={review} userId={userId} key={review.id}/>)}
            </div>
        );
    }

const msp = state => ({
    reviews: state.reviews.reviews,
    userId : state.user.userId
})


export default connect(msp)(ReviewContainer);