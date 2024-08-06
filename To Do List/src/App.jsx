
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { delTask, overTask ,compTask , taskUncom, editSave} from "./toDoSlice";

const App=()=>{

    const [input,setInput]=useState("")
    const [mybtn,setMybtn]=useState(true);
    const [editID,setEditID]=useState("");

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

    const workEdit=(id,task)=>{
        setInput(task)
        setMybtn(false)
        setEditID(id)

    }

    const editdataSave=(myid,mywork)=>{
        mydis(editSave({id:myid,task:mywork}))
        setMybtn(true);
        setInput("")
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
                <td>
                    <button onClick={()=>{workEdit(key.id,key.task)}}>Edit</button>
                </td>

            </tr>
            </>
        )
    })

    return(
        <>
        <h1>TO DO List</h1>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        {mybtn? (<button onClick={taskAdd}>Add</button>) : (<button onClick={()=>{editdataSave(editID ,input)}}>Edit Save</button>) }
        

        <hr size="10px" color="black" />
        <tr>
            <th>S No.</th>
            <th>Task</th>
            <th></th>
            <th></th>
        </tr>
        {ans}
        </>
    )
}
export default App;