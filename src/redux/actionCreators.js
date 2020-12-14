
export const getYelpResults = (searchTerm) =>{
    return dispatch => {
        fetch(`http://localhost:3000/search`, {
        headers: {'Search': `${searchTerm}`}
        })
        .then(r => r.json())
        .then(results => dispatch({
            type: 'SET_RESULTS',
            payload: results
           })
        )
    }
}

export const getYelpRestaurant = (id) =>{
    return dispatch => {
        fetch("http://localhost:3000/get_restaurant", {
            headers: {'Yelp-Id': `${id}`}
        })
        .then(r => r.json())
        .then(obj => {
            if (obj.error){
             dispatch({type: 'REDIRECT_404'})
            } else {
             dispatch({type: 'SET_YELP', payload: obj})   
            }}
            )
    }
}
    
export const findBackEndRestaurant = (yelpId) =>{
    return dispatch => {
        fetch('http://localhost:3000/existing_restaurant', {
            headers: {
              'Yelp-Id': `${yelpId}`
                }
            })
            .then(r => r.json())
            .then(obj => {
                if (obj.restaurant_id){
                    dispatch({type: 'SET_BACKEND', payload: obj.restaurant_id})
                }
            })
    }
}

export const clearYelp = () =>({ type: 'CLEAR_YELP' })