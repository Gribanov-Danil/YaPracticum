import {combineReducers} from "redux";
import ingredientsReducer from "./reducers/ingredientsSlice";
import {configureStore} from "@reduxjs/toolkit";
import pickedIngredientsReducer from "./reducers/pickedIngredientsSlice.js"
import orderDetailsReducer from "./reducers/orderDetailsSlice"
import ingredientDetailsReducer from "./reducers/ingredientDetailsSlice";


const rootReducer = combineReducers({
    ingredientsReducer,
    pickedIngredientsReducer,
    orderDetailsReducer,
    ingredientDetailsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}