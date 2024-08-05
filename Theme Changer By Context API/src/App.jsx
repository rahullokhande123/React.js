
import { useState } from "react";

import { Container } from "react-bootstrap";

const App=()=>{
 
  const [txt,setTxt]=useState("");

  return(
     <>
     <Container style={{marginLeft:"450px"}}>
      
     <h1>Wellcome Theme Change Program</h1>
     <div style={{marginLeft:"150px"}}>
     <input type="text" placeholder="Enter Color"  value={txt} onChange={(e)=>{setTxt(e.target.value)}} />
     <button>Change Color</button> <br /> <br />
     <div style={{width:"300px",height:"300px",border:"2px solid black",backgroundColor:"blue"}}></div>
     </div>
     </Container>
     </>
  )
}
export default App;



