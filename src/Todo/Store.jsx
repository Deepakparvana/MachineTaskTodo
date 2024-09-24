import { configureStore } from "@reduxjs/toolkit";
import todos from './TodoReducers'

export const Store = configureStore({
    reducer:{
        todo:todos
    }
})