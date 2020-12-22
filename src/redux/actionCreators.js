
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

export const clearYelpResutls = () => ({
  type: 'CLEAR_YELP_RESULTS'
})

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


export const openModal = () => ({ type: 'OPEN_MODAL'})

export const closeModal = () => ({ type: 'CLOSE_MODAL'})

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

export const handleContent = e =>({
  type: 'HANDLE_CONTENT', payload: e.target.value
})

export const handleRating = e =>({
  type: 'HANDLE_RATING', payload: e.target.value
})


export const logout = () => ({ type: 'LOGOUT' })

export const addReviewOnly = (e, content, rating, user_id, restaurant_id) =>{
    e.preventDefault()
    return dispatch => {
        fetch('http://localhost:3000/reviews',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
             body: JSON.stringify({
                content,
                rating,
                user_id,
                restaurant_id 
             }),
        })
        .then(r => r.json())
        .then(res => { 
            if (res.errors){
              alert(res.errors)
            } else {
              dispatch({ type: 'ADD_REVIEW', payload: res})
              dispatch({ type: 'CLOSE_MODAL'}) 
            }
        })
    }
}

export const deleteReview = (id) =>{
    return dispatch => {
        fetch(`http://localhost:3000/reviews/${id}`,{
            method: 'DELETE'
        })
        .then(dispatch({ type: 'DELETE_REVIEW', payload: id}))
    }
}

export const addRestaurantandReview = (e, name, yelp_id, content, rating, user_id) =>{
    e.preventDefault()
    return dispatch => {
        fetch('http://localhost:3000/restaurants',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
            body: JSON.stringify({
               name,
               yelp_id
             })
        })
        .then(r => r.json())
        .then(restResp => { 
            if (restResp.errors){
              alert(restResp.errors)
            } else { 
                fetch('http://localhost:3000/reviews',{
                    method: 'POST',
                    headers: {
                     'Content-Type': 'application/json',
                     },
                    body: JSON.stringify({
                content,
                rating,
                user_id,
                restaurant_id: restResp.id 
             }),
        })
        .then(r => r.json())
        .then(res => { 
            if (res.errors){
              alert(res.errors)
            } else {
                dispatch({ type: 'ADD_REVIEW', payload: res})
                dispatch({ type: 'CLOSE_MODAL'})
                dispatch({ type: 'ADD_REST_ID', payload: restResp.id }) 
            }
        })
        
            }
        })
    }
}
