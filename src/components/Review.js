const Review = ({review}) => {
        return (
            <div>
                <p>{review.content} by {review.user.username}</p>
            </div>
        );
    }

export default Review;