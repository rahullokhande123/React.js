
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { overDelTask, overTask } from "./toDoSlice";

const App=()=>{

    const [input,setInput]=useState("")

    const mySelector=useSelector((state)=>state.myTask.task);
    const mydis=useDispatch();

    const taskAdd=()=>{
        mydis(overTask({id: Date.now(), task:input}))
        setInput("")
    }
    const myDel=()=>{
        mydis(overDelTask({id: Date.now(), task:input}))
    }
    let sno=0
    const ans=mySelector.map((key)=>{
        sno++
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.task}</td>
                <button onClick={myDel}>Delet</button>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>TO DO List</h1>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={taskAdd}>Add</button>
        

        <hr size="10px" color="black" />
        <tr>
            <th>S No.</th>
            <th>Task</th>
        </tr>
        {ans}
        </>
    )
}
export default App;