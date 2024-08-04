
import { createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";

const myToSlice=createSlice({
    name:"myTask",
    initialState:{
        task:[]
    },
    reducers:{
        overTask:(state,actions)=>{
            state.task.push(actions.payload)
        },

// First Delete Program Way ================

        // overDelTask:(state,actions)=>{
        //     state.task.pop(actions.payload)
        // }

        delTask:(state,actions)=>{
            state.task=state.task.filter(item=> item.id!=actions.payload)
        }

    }
})
export default myToSlice.reducer;
export const {overTask,delTask}=myToSlice.actions;