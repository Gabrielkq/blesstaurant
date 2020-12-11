import { combineReducers } from "redux";
import restaurantsReducer from './restaurantsReducer'

export const reducer = combineReducers({restaurants: restaurantsReducer})

