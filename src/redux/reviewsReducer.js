const initialState = {
    reviews : []
}

const reviewsReducer = (state=initialState, action) => {
    switch (action.type){
        case 'GET_REVIEWS':
            return {...state, reviews: action.payload}
        case 'ADD_REVIEW':
                return {...state, reviews: [...state.reviews, action.payload]}
        case 'CLEAR_RESTAURANT_PAGE':
            return {...state, reviews: []}
        case 'DELETE_REVIEW':
            const newReviews = [...state.reviews.filter(r => r.id !== action.payload)]
            return {...state, reviews: newReviews }
        default: 
            return {...state}
    } 

}

export default reviewsReducer
