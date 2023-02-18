import {combineReducers} from "redux";
import ingredientDetailsReducer from "./reducers/ingredientDetailsReducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    ingredientDetailsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}