const initialState = {
    yelpResults: []
}

const restaurantsReducer = (state=initialState, action) => {
    switch (action.type){
        case 'SET_RESULTS':
            return {...state, yelpResults: action.payload.restaurants}
        default: 
         return {...state}
    } 

}

export default restaurantsReducer


// const initialRestaurantState = {
//     restaurants: []
//   }
  
//   const restaurantsReducer = (state=initialRestaurantState, action) => {
//     switch (action.type){
//       case "SET_RESTAURANTS":
//         return {...state, restaurants: action.payload}
//       default:
//         return {...state}
//     }
//   }
  
//   export default restaurantsReducer
  