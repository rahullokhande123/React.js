
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { delTask, overTask ,compTask , taskUncom} from "./toDoSlice";

const App=()=>{

    const [input,setInput]=useState("")

    const mySelector=useSelector((state)=>state.myTask.task);
    const mydis=useDispatch();

    const taskAdd=()=>{
        mydis(overTask({id: Date.now(), task:input , complete:false}))
        setInput("")
    }

// For pop Method ====================

    // const myDel=()=>{
    //     mydis(overDelTask({id: Date.now(), task:input}))
    // }

    const myDel=(id)=>{
        mydis(delTask(id))
    }
    
    const workComp=(id)=>{
        mydis(compTask(id))
    }

    const workUncomp=(id)=>{
        mydis(taskUncom(id))
    }

    let sno=0
    const ans=mySelector.map((key)=>{
        sno++
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.complete? <span style={{textDecoration:"line-through",color:"black"}}>{key.task}</span> : key.task}</td>
                <td>
                <button onClick={()=>{myDel(key.id)}}>Delet</button>
                </td>
                <td>
                    <button onClick={()=>{workComp(key.id)}}>Complete</button>
                </td>
                <td>
                    <button onClick={()=>{workUncomp(key.id)}}>Uncomplete</button>
                </td>

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