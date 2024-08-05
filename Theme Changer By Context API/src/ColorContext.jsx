import { createContext } from "react";
import { useState } from "react";

const mycolorContext=createContext();
const ColorContext=({children})=>{

  const [color,setColor]=useState("pink");

  return(
    <>
    <mycolorContext.Provider value={{color,setColor}}>
      {children}
    </mycolorContext.Provider>
    </>
  )

}
export default ColorContext;
export {mycolorContext}
