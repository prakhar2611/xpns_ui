import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Welcome } from './Components/Welcome';
import { CallbackRoute } from './Components/CallBack';
import { SignIn } from './Components/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path : "/auth/callback",
    element : <CallbackRoute />

  },
  {
    path :"/SignIn",
    element : <SignIn/>
  },
  {
    path : "/Welcome",
    element : <Welcome />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
