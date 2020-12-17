const blankYelp = {location : {display_address: null},
                   photos: [] }

const initialState = {
    yelpResults: [],
    yelpRestaurant: blankYelp ,
    restaurantInBackEnd: false,
    restaurantId: null,
    redirect: false,
    displayModal: false

}

const restaurantsReducer = (state=initialState, action) => {
    switch (action.type){
        case 'SET_RESULTS':
            return {...state, yelpResults: action.payload.restaurants} 
        case 'SET_YELP':
            return {...state, yelpRestaurant: action.payload.yelp_restaurant}
        case 'CLEAR_RESTAURANT_PAGE':
            return {...state, yelpRestaurant: blankYelp, restaurantInBackEnd: false, restaurantId: null}
        case 'REDIRECT_404':
            return {...state, redirect: true}
        case 'SET_BACKEND':
            return {...state, restaurantInBackEnd: true, restaurantId: action.payload}
        case 'TOGGLE_MODAL':
            return {...state, displayModal: !state.displayModal}
        default: 
         return {...state}
    } 

}

export default restaurantsReducer

