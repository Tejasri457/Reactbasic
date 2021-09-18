import { ComputerScience, Electrical, Mechanical, BioTech } from "./data";
import { useState } from "react";
import { Button } from "@material-ui/core";

const s1 = {
 border: "1px solid violet",
 width: "900px",
 boxShadow: "2px 3px 5px black",
 color: "Darkred",
 margin: "auto",
 textAlign: "center",
 textShadow: "1px 1px 2px blue, 1px 2px 1px yellow",
};
const s2 = {
 margin: 35,
};
const App= () => {
 const [dept, setDept] = useState(ComputerScience);
 const changeView = (dep) => {
 setDept(dep);
 };
 return (
 <div style={s1}>
 <div>
   <h>KL UNIVERSITY</h>
   <p />
    
 <Button
 style={s2}
 variant="outlined"
 color="primary"
 onClick={() => changeView(ComputerScience)}
 >
 {" "}
 CSE{" "}
 </Button>
 <Button
 style={s2}
 variant="outlined"
 color="dark"
 onClick={() => changeView(Electrical)}
 >
 {" "}
 EEE{" "}
 </Button>
 <Button
 style={s2}
 variant="outlined"
 color="tertiary"
 onClick={() => changeView(Mechanical)}
 >
 {" "}
 MEC{" "}
 </Button>
 <Button
 style={s2}
 variant="outlined"
 color="tertiary"
 onClick={() => changeView(BioTech)}
 >
 {" "}
 BT{" "}
 </Button>
 </div>
 <img src={dept[0].imageUrl} alt="Computer Science" width="760" />
 <p> {dept[0].displayName}</p>
 <p> {dept[0].description} </p>
 <p> HOD: {dept[0].hod} </p>
 <h>programsOffered </h>
 <h style={{ textAlign: "left" }}>
 <ul>
 <li>{dept[0].programsOffered} </li>
 </ul>
 </h>
 </div>
 );
};
export default skill3;