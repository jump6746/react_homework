import "./App.css";
import {useState, useRef, useEffect} from "react";
import InputStateTest from './components/HookTest/InputStateTest';
import StateTest from './components/HookTest/StateTest';
import SideEffect from "./components/SideEffect/SideEffect";

function App() {

  return(

    <>
      <StateTest />
      <InputStateTest />
    </>

  )
}

export default App;
