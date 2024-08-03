
import { configureStore } from "@reduxjs/toolkit";
import myReduser from "./toDoSlice";

const Store=configureStore({
   reducer:{
      myTask:myReduser

   }
})

export default Store;