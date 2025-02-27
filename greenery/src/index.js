import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@splidejs/react-splide/css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './Components/ContextProvider'
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
