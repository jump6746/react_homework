import {useId, useState} from "react";

export default function InputStateTest(){

  const id = useId();

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  }

  function onReset(){
    setText("");
  }

  return (
    <div>
      <label htmlFor={id}>아이디</label>
      <input type="text"
             value={text} 
             id={id} 
             placeholder="아이디를 입력해주세요."
             onChange={onChange}
      />
      <button type="button" onClick={onReset}>초기화</button>
      <span>{text}</span>
    </div>
  );
}