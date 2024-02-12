import { useState } from 'react';
import PocketBase from 'pocketbase';
import classes from '/src/styles/SignIn.module.css';
import FormInput from '../components/Form/FromInput';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    emailField: '',
    pwField: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  async function handleLogin(e) {
    e.preventDefault();

    const emailValue = formValues.emailField;
    const pwValue = formValues.pwField;
    const rememberValue = e.target.rememberId.checked;

    try {
      const pb = new PocketBase(import.meta.env.VITE_PB_URL);
      const authData = await pb
        .collection('kakaoUsers')
        .authWithPassword(emailValue, pwValue);

      const loginUserData = JSON.stringify(authData.record);

      await localStorage.setItem('isAuth', loginUserData);

      if (rememberValue) {
        const data = {
          email: emailValue,
          password: pwValue,
        };
        const inputData = JSON.stringify(data);

        await localStorage.setItem('rememberInput', inputData);
      }

      navigate('/chatList/');
    } catch {
      alert('아이디 혹은 비밀번호가 틀렸습니다.');
    }
  }

  return (
    <div className="w-[390px] h-[844px] px-[45px] py-[100px] m-4 bg-yellow-300 flex flex-col">
      <form className="flex flex-col w-[300px]" onSubmit={handleLogin}>
        <FormInput
          labelClass={classes.SrOnly}
          inputClass="border-b-2 rounded-t"
          label="이메일"
          name="emailField"
          type="email"
          placeholder="mail@domain.com"
          onChange={handleChange}
        />
        <FormInput
          labelClass={classes.SrOnly}
          inputClass="border-b-2 rounded-t"
          label="비밀번호"
          name="pwField"
          type="password"
          placeholder="●●●●●●●●●●"
          onChange={handleChange}
        />
        <button
          className="rounded bg-black text-white p-2 text-lg my-4"
          type="submit"
        >
          Log in
        </button>
        <div className="flex items-center gap-1">
          <input className="w-6 h-6" type="checkbox" name="rememberId" id="" />
          <label className="" htmlFor="">
            Remember me
          </label>
        </div>
      </form>
      <a
        href="/signUp/"
        className="mt-auto w-auto bg-gray-200 text-center p-2 text-lg rounded"
      >
        Create Account
      </a>
    </div>
  );
}
