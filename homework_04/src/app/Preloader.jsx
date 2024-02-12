import { useEffect } from 'react';
import KakaoLogo from '../components/Logo/KakaoLogo';
import classes from '/src/styles/SignIn.module.css';
import { useNavigate } from 'react-router-dom';

export default function Preloader() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login/');
    }, 2000);
  });

  return (
    <div className="w-[390px] h-[844px] m-4 px-[45px] py-[200px] bg-yellow-300">
      <figure>
        <KakaoLogo />
        <figcaption className={classes.SrOnly}>카카오톡</figcaption>
      </figure>
    </div>
  );
}
