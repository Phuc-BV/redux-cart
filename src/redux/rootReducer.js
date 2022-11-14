import { combineReducers } from "redux";

import shoppingReducer from "./shopping/Shopping-Reducer";

const rootReducer = combineReducers({
    shop: shoppingReducer,
});

export default rootReducer;
