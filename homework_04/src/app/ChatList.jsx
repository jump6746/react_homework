import { useEffect } from 'react';
import classes from '/src/styles/Profile.module.css';
import { useState } from 'react';

export default function ChatList() {
  const defaultClass = '';
  const className = `${classes.Default_Image} ${defaultClass}`;

  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const data = localStorage.getItem('isAuth');
      const userData = JSON.parse(data);

      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 w-[390px] h-[844px] bg-yellow-100">
      <div className="flex items-center gap-4">
        <div className={className}>
          <span className={classes.SrOnly}>
            {`${user.username}의 프로필 사진`}
          </span>
        </div>
        <div>
          <span>{user.username}님</span>
        </div>
      </div>
      <ul>
        <li className="flex items-center gap-4 py-2 border-y-2">
          <div className={className}>
            <span className={classes.SrOnly}>
              {`${user.username}의 프로필 사진`}
            </span>
          </div>
          <span className="flex flex-col">
            <strong>{user.username}</strong>
            {'안녕하세요'}
          </span>
        </li>
        <li className="flex items-center gap-4 py-2 border-y-2">
          <div className={className}>
            <span className={classes.SrOnly}>
              {`${user.username}의 프로필 사진`}
            </span>
          </div>
          <span className="flex flex-col">
            <strong>{user.username}</strong>
            {'안녕하세요'}
          </span>
        </li>
        <li className="flex items-center gap-4 py-2 border-y-2">
          <div className={className}>
            <span className={classes.SrOnly}>
              {`${user.username}의 프로필 사진`}
            </span>
          </div>
          <span className="flex flex-col">
            <strong>{user.username}</strong>
            {'안녕하세요'}
          </span>
        </li>
      </ul>
      <div className="bg-yellow-400 w-auto h-16 flex justify-between mt-auto">
        <button type="button" className="border-2 border-black w-[80px]">
          친구 목록
        </button>
        <button type="button" className="border-2 border-black w-[80px]">
          채팅 목록
        </button>
        <button type="button" className="border-2 border-black w-[80px]">
          설정
        </button>
        <button type="button" className="border-2 border-black w-[80px]">
          로그아웃
        </button>
      </div>
    </div>
  );
}
