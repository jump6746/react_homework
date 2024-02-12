import { useEffect, useRef, useState } from 'react';
import PocketBase from 'pocketbase';
import FormInput from '../components/Form/FromInput';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    emailField: '',
    nameField: '',
    pwField: '',
    pwCheckField: '',
  });

  const buttonRef = useRef('buttonValidation');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    const password = formValues.pwField;
    const passwordCheck = formValues.pwCheckField;
    const registerBtn = buttonRef.current;

    if (password === passwordCheck && password !== '') {
      registerBtn.disabled = false;
    } else {
      registerBtn.disabled = true;
    }
  }, [formValues.pwField, formValues.pwCheckField]);

  async function handleRegister(e) {
    e.preventDefault();

    const emailValue = formValues.emailField;
    const nameValue = formValues.nameField;
    const pwValue = formValues.pwField;
    const data = {
      username: nameValue,
      email: emailValue,
      emailVisibility: true,
      password: pwValue,
      passwordConfirm: pwValue,
    };

    try {
      const pb = new PocketBase(import.meta.env.VITE_PB_URL);

      await pb.collection('kakaoUsers').create(data);

      alert('가입 성공');

      navigate('/login/');
    } catch {
      alert('회원가입 중 오류 발생! 잠시 후 다시 시도해주세요.');
    }
  }

  return (
    <div className="w-[390px] h-[844px] px-[45px] py-[100px] m-4 bg-yellow-300 flex flex-col">
      <form className="flex flex-col gap-10" onSubmit={handleRegister}>
        <FormInput
          label="이메일"
          name="emailField"
          type="email"
          placeholder="이메일을 입력해주세요."
          onChange={handleChange}
          inputProps={{ required: true }}
        />
        <FormInput
          label="이름"
          name="nameField"
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={handleChange}
          inputProps={{ required: true }}
        />
        <FormInput
          label="비밀번호"
          name="pwField"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChange}
          inputProps={{ required: true, minLength: '6' }}
        />
        <FormInput
          label="비밀번호 확인"
          name="pwCheckField"
          type="password"
          placeholder="동일한 비밀번호를 입력해주세요."
          onChange={handleChange}
          inputProps={{ required: true, minLength: '6' }}
        />
        <button
          type="submit"
          ref={buttonRef}
          className="mt-auto w-auto bg-gray-200 text-center p-2 text-lg rounded"
          disabled
        >
          가입하기
        </button>
      </form>
    </div>
  );
}
