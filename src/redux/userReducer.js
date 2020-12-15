const initialState = {
    userId: null,
    username: ""
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
        case 'AUTO_LOGIN':
            return {...state, userId: action.payload.id, username: action.payload.username}
        case 'SET_TOKEN':
            return {...state, userId: action.payload.user_id, username: action.payload.username }
        case 'LOGOUT':
            localStorage.removeItem("token")
            return {...state, userId: null, username: ""}
        default: 
            return {...state}
    } 

}

export default userReducer
