import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: ''
}

export const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers:{
        updateId:(state, action) => {
            console.log(action.payload)
            state.id = action.payload.id
        },
        deleteId: (state, action) => {
            console.log(action.payload)
            state.id = ''
        }
    }
})

export default orderDetailsSlice.reducer