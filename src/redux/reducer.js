import { combineReducers } from "redux";
import userReducer from './userReducer'
import restaurantsReducer from './restaurantsReducer'

export const reducer = combineReducers({
                            restaurants: restaurantsReducer,
                            user: userReducer})

