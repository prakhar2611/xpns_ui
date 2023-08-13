import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Welcome } from './Components/Welcome';
import { CallbackRoute } from './Components/GoogleSingIn/CallBack';
import { SignInLanding } from './Page/SignInLanding';
import {OopsPage} from './Components/OopsPage'
import { SignIn } from './Components/GoogleSingIn/SignIn';
import { LayoutPage } from './Page/Home/LayoutPage';
import {Y2s} from './Page/Home/Y2s'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInLanding />,
  },
  {
    path : "/auth/callback",
    element : <CallbackRoute />

  },
  {
    path : "/OopsPage",
    element : <OopsPage />
  },
  {
    path : "/Layout",
    element : <LayoutPage />
  },
  {
    path : "/Y2S",
    element : <Y2s />
  },
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
