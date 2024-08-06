
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

// First Delete Program Way(Esse Last Wala Hi Delete HOte Jayega) ================

        // overDelTask:(state,actions)=>{
        //     state.task.pop(actions.payload)
        // }
// Seconde Delete Program Way ================
        // delTask:(state,actions)=>{
        //     state.task=state.task.filter(item=> item.id!=actions.payload)
        // }

// Third Delete Program Way ================

          delTask:(state,actions)=>{
            state.task=state.task.filter((key)=>{
                if(key.id==actions.payload){
                    return false
                }
                else{
                    return true
                }
            })
          },
// Complete ================================

          compTask:(state,actions)=>{
            for(var i=0; i<state.task.length; i++){
                if(state.task[i].id == actions.payload){
                    state.task[i].complete=true;
                }
            }
          },

          taskUncom:(state,actions)=>{

            for(var i=0; i<state.task.length; i++){
                if(state.task[i].id==actions.payload){
                    state.task[i].complete=false;
                }
            }
        },

        editSave:(state,actions)=>{
            for(var i=0; i<state.task.length; i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].task=actions.payload.task;
                }
            }
        }

    }
})
export default myToSlice.reducer;
export const {overTask,delTask,compTask,taskUncom}=myToSlice.actions;