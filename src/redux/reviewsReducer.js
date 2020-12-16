const initialState = {
    reviews : []
}

const reviewsReducer = (state=initialState, action) => {
    switch (action.type){
        case 'GET_REVIEWS':
            return {...state, reviews: action.payload}
        case 'CLEAR_RESTAURANT_PAGE':
            return {...state, reviews: []}
        default: 
            return {...state}
    } 

}

export default reviewsReducer
