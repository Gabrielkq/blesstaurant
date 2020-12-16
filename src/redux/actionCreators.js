
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
                    fetch('http://localhost:3000/restaurant_reviews', {
                      headers: {'Rest-Id': `${obj.restaurant_id}`}
                     })
                    .then(r => r.json())
                    .then(resp => {
                        dispatch({type: 'GET_REVIEWS', payload: resp})
                    })
                }
            })
    }
}

export const clearRestaurantPage = () =>({ type: 'CLEAR_RESTAURANT_PAGE' })

export const toggleModal = () => ({ type: 'TOGGLE_MODAL'})

export const autoLogin = (token) => {
    return dispatch => {
        fetch("http://localhost:3000/auto_login", {
          headers: {
            "Authorization": token
          }
        })
        .then(r => r.json())
        .then(res => { 
          if (res.errors){
            console.log(res.errors)
          } else {
            dispatch({ type: 'AUTO_LOGIN', payload: res}) 
          }
        })
    }
} 

export const setToken = data => {
    localStorage.token = data.token
    return dispatch => {
    fetch(`http://localhost:3000/users/${data.user_id}`)
      .then(r => r.json())
      .then(dispatch({ type: 'SET_TOKEN', payload: data})
      )
    }
  }

export const logout = () => ({ type: 'LOGOUT' })
