import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import SignIn from '/src/app/SignIn.jsx';
import '/src/styles/main.css';
import Preloader from './app/Preloader';
import SignUp from './app/SignUp';
import ChatList from './app/ChatList';
import ChatRoom from './app/ChatRoom';

const rootElement = document.getElementById('app');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />}></Route>
        <Route path="/login/" element={<SignIn />}></Route>
        <Route path="/signUp/" element={<SignUp />}></Route>
        <Route path="/chatList/" element={<ChatList />}></Route>
        <Route path="/chatRoom/" element={<ChatRoom />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
