

import { useContext, useState } from "react";
import { mycolorContext } from "./ColorContext";
import { Container } from "react-bootstrap";

const App=()=>{
  const {color,setColor}=useContext(mycolorContext);
  const [txt,setTxt]=useState("");

  return(
     <>
     <Container style={{marginLeft:"450px"}}>
      
     <h1>Wellcome Theme Change Program</h1>
     <div style={{marginLeft:"150px"}}>
     <input type="text" placeholder="Enter Color"  value={txt} onChange={(e)=>{setTxt(e.target.value)}} />
     <button onClick={()=>{setColor(txt)}}>Change Color</button> <br /> <br />
     <div style={{width:"300px",height:"300px",border:"2px solid black",backgroundColor:color}}></div></div>
     </Container>
     </>
  )
}
export default App;



