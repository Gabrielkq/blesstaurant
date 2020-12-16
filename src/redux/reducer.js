import { combineReducers } from "redux";
import userReducer from './userReducer';
import restaurantsReducer from './restaurantsReducer';
import reviewsReducer from './reviewsReducer';

export const reducer = combineReducers({
                            restaurants: restaurantsReducer,
                            user: userReducer,
                            reviews: reviewsReducer})

