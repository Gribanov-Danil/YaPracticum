import {combineReducers} from "redux";
import ingredientDetailsReducer from "./reducers/ingredientDetailsSlice";
import {configureStore} from "@reduxjs/toolkit";
import pickedIngredientsReducer from "./reducers/pickedIngredientsSlice.js"
import orderDetailsReducer from "./reducers/orderDetailsSlice"


const rootReducer = combineReducers({
    ingredientDetailsReducer,
    pickedIngredientsReducer,
    orderDetailsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}