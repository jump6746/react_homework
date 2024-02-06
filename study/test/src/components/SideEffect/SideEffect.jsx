import {useState} from "react";
let count = 1;

export default function SideEffect({}){

  if(true){
    const [state, setState] = useState("");
  }

  return(
    <div>
      <span>{count++}</span>
      <span>{count++}</span>
    </div>
  );
}