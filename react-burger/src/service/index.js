import {combineReducers} from "redux";
import ingredientDetailsReducer from "./reducers/ingredientDetailsReducer";
import {configureStore} from "@reduxjs/toolkit";
import pickedIngredientsReducer from "./reducers/pickedIngredientsReducer.js"


const rootReducer = combineReducers({
    ingredientDetailsReducer,
    pickedIngredientsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}