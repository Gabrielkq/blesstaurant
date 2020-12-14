const blankYelp = {location : {display_address: null}}

const initialState = {
    yelpResults: [],
    yelpRestaurant: blankYelp ,
    inBackEnd: false,
    backEndId: null,
    redirect: false

}

const restaurantsReducer = (state=initialState, action) => {
    switch (action.type){
        case 'SET_RESULTS':
            return {...state, yelpResults: action.payload.restaurants} 
        case 'SET_YELP':
            return {...state, yelpRestaurant: action.payload.yelp_restaurant}
        case 'CLEAR_YELP':
            return {...state, yelpRestaurant: blankYelp, inBackEnd: false, backEndId: null}
        case 'REDIRECT_404':
            return {...state, redirect: true}
        case 'SET_BACKEND':
            return {...state, inBackEnd: true, backEndId: action.payload}
        default: 
         return {...state}
    } 

}

export default restaurantsReducer

