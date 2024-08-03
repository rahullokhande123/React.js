
import { createSlice } from "@reduxjs/toolkit";

const myToSlice=createSlice({
    name:"myTask",
    initialState:{
        task:[]
    },
    reducers:{
        overTask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        overDelTask:(state,actions)=>{
            state.task.pop(actions.payload)
        }

    }
})
export default myToSlice.reducer;
export const {overTask,overDelTask}=myToSlice.actions;