import KakaoLogo from '../components/Logo/KakaoLogo';
import classes from '/src/styles/SignIn.module.css';

export default function Preloader() {
  return (
    <div className="w-[390px] h-[844px] m-4 px-[45px] py-[200px] bg-yellow-300">
      <figure>
        <KakaoLogo />
        <figcaption className={classes.SrOnly}>카카오톡</figcaption>
      </figure>
    </div>
  );
}
