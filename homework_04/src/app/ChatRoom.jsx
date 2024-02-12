import { useState } from 'react';
import classes from '/src/styles/chatRoom.module.css';
import { useRef } from 'react';
import PocketBase from 'pocketbase';
import ChatMessage from '../components/ChatRoom/ChatMessage';

export default function ChatRoom({ receiver = '' }) {
  const [chatData, setChatData] = useState({
    sender: 'test',
    senderId: '',
    receiver: 'hello',
    message: '',
    date: '',
  });

  const [chatMessage, setChatMessage] = useState([]);

  const messageInput = useRef();
  const dateValue = useRef('');

  function resetInput(ref) {
    ref.current.value = '';
    setChatData({
      ...chatData,
      message: '',
    });
  }

  function getUserData() {
    try {
      const data = localStorage.getItem('isAuth');
      const userData = JSON.parse(data);

      return userData;
    } catch (error) {
      console.log(error);
    }
  }

  function getTimeData(time) {
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();

    return `${day}일 ${hour}시 ${minute}분`;
  }

  async function sendChatData({ sender, receiver, message }) {
    const pb = new PocketBase(import.meta.env.VITE_PB_URL);
    const data = await pb.collection('chatList').getFullList({
      filter: `sender = "${sender}" && receiver = "${receiver}"`,
    });

    data[0].chatData.messageData.push({ message });

    console.log(data[0].chatData.messageData);
  }

  const handleChange = (e) => {
    const text = e.target.value;

    setChatData({
      ...chatData,
      message: text,
    });
  };

  const handleSend = (e) => {
    e.preventDefault();

    const { id, username } = getUserData();

    console.log(id, username);
    console.log(username);

    const currentTime = new Date();

    dateValue.current = getTimeData(currentTime);

    setChatData({
      ...chatData,
      sender: username,
      senderId: id,
      date: dateValue.current,
    });

    resetInput(messageInput);

    setChatMessage([
      ...chatMessage,
      <ChatMessage key={currentTime} message={chatData.message} />,
    ]);

    console.log(chatData);
    sendChatData(chatData);
  };

  return (
    <div className="w-[390px] h-[844px] bg-yellow-200">
      <div className="w-auto h-[800px] bg-green-200">
        <ul className="flex flex-col h-[800px] justify-end gap-4">
          {chatMessage}
        </ul>
      </div>
      <form className="flex" onSubmit={handleSend}>
        <label className={classes.SrOnly}>채팅 입력</label>
        <input
          type="text"
          ref={messageInput}
          className="w-4/5 h-11 border-2 p-4"
          placeholder="채팅을 입력해주세요."
          onChange={handleChange}
        />
        <button
          type="submit"
          className="flex items-center justify-center w-1/5"
        >
          보내기
        </button>
      </form>
    </div>
  );
}
