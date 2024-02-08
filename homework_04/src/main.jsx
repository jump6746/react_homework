import React from 'react';
import { createRoot } from 'react-dom/client';
import SignIn from '/src/app/SignIn.jsx';
import '/src/styles/main.css';
import Preloader from './app/Preloader';
import SignUp from './app/SignUp';

const rootElement = document.getElementById('main');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Preloader />
    <SignUp />
  </React.StrictMode>
);
