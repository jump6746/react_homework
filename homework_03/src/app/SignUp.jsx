import { useState } from 'react';
import FormWrapper from '../components/Form/FormWrapper';
import FormButton from '../components/Form/FormButton';


export default function SignUP() {
  
  const [formData, setFromData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form  = new FormData(e.currentTarget);
    setFromData(form);
    console.log(formData);
  }

  const handleClick = (e) => {

    

  }


  return (
    <form name="signUp" onSubmit={handleFormSubmit}>
      <FormWrapper 
        label="아이디"
        inputType="text"
        name="idField"
        placeholder="아이디를 입력해주세요"
        buttonCheck= {true}
        buttonType= "button"
        buttonText= "중복 확인"
        buttonEvent={handleClick}
      />
      <FormButton buttonText="가입 하기" buttonType='submit' />
    </form>
  );
}

