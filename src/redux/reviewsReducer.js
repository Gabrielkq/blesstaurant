const initialState = {
    reviews : [],
    newReviewContent: "",
    newReviewRating: 5
    
}

const reviewsReducer = (state=initialState, action) => {
    switch (action.type){
        case 'GET_REVIEWS':
            return {...state, reviews: action.payload}
         case 'ADD_REVIEW':
            return {...state, reviews: [...state.reviews, action.payload], newReviewRating: 5, newReviewContent: ""}
        case 'CLEAR_RESTAURANT_PAGE':
            return {...state, reviews: []}
        case 'DELETE_REVIEW':
            const newReviews = [...state.reviews.filter(r => r.id !== action.payload)]
            return {...state, reviews: newReviews }
        case 'HANDLE_CONTENT':
            return {...state, newReviewContent: action.payload}
        case 'HANDLE_RATING':
            return {...state, newReviewRating: action.payload}
        default: 
            return {...state}
    } 

}

export default reviewsReducer
