import Review from '../components/Review';
import { connect } from 'react-redux';

const ReviewContainer = (props) => {
        return (
            <div>
                {props.reviews.map(review => <Review review={review} key={review.id}/>)}
            </div>
        );
    }

const msp = state => ({
    reviews: state.reviews.reviews
})

export default connect(msp)(ReviewContainer);