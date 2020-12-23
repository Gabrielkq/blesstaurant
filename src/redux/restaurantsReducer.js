const blankYelp = {location : {display_address: []},
                   photos: [] }

const initialState = {
    yelpResults: [],
    yelpRestaurant: blankYelp ,
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
            return {...state, yelpRestaurant: blankYelp, restaurantId: null, redirect: false}
        case 'REDIRECT_404':
            return {...state, redirect: true}
        case 'SET_BACKEND':
            return {...state, restaurantId: action.payload}
        case 'OPEN_MODAL':
            return {...state, displayModal: true}
        case 'CLOSE_MODAL':
            return {...state, displayModal: false}
        case 'CLEAR_YELP_RESULTS':
            return {...state, yelpResults: []}
        case 'ADD_REST_ID':
            return {...state, restaurantId: action.payload} 
        default: 
         return {...state}
    } 

}

export default restaurantsReducer

