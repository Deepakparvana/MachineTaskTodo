import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

const TodoReducer = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addItem : (state,action)=>{
            state.data.push(action.payload)
        },
        remove :(state,action)=>{
            state.data = state.data.filter(item => item !== action.payload)
        }
    }
})


export default TodoReducer.reducer
export const {addItem,remove} = TodoReducer.actions