
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { delTask, overTask } from "./toDoSlice";

const App=()=>{

    const [input,setInput]=useState("")

    const mySelector=useSelector((state)=>state.myTask.task);
    const mydis=useDispatch();

    const taskAdd=()=>{
        mydis(overTask({id: Date.now(), task:input}))
        setInput("")
    }
    const myDel=(id)=>{
        mydis(delTask(id))
    }
    let sno=0
    const ans=mySelector.map((key)=>{
        sno++
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.task}</td>
                <button onClick={()=>{myDel(key.id)}}>Delet</button>
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