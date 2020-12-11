
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