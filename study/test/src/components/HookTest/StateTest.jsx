import {useState, useRef, useEffect} from "react";
import classes from "./StateTest.module.css";

function StateTest(){

  const [number, setNumber] = useState(1);
  let consoleNumber = useRef(1);

  const increaseNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  } 

  const decreaseNumber = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  useEffect(function(){
    console.log(consoleNumber.current);
    consoleNumber.current++;
  }, [number])

  return (
    <div className={classes.StateTest}>
      <h1>useState 테스트</h1>
      <span>{number}</span>
      <button type="button" onClick={increaseNumber}>+</button>
      <button type="button" onClick={decreaseNumber}>-</button>
    </div>
  );
}

export default StateTest;