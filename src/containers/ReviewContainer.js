import Review from '../components/Review';
import { connect } from 'react-redux';

const ReviewContainer = ({ reviews, userId }) => {
        return (
            <div id="rev-cont">
                {(reviews.length === 0) 
                ?
                <p>no reviews so far....</p>
                :
                reviews.map(review => <Review review={review} userId={userId} key={review.id}/>)}
            </div>
        );
    }

const msp = state => ({
    reviews: state.reviews.reviews,
    userId : state.user.userId
})


export default connect(msp)(ReviewContainer);