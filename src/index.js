import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@radix-ui/themes/styles.css';

import store from './Utils/store';
import { Provider } from 'react-redux'
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
import { Counter } from './Page/Home/Counter.js';
import { HomePage } from './HomeV2/homepage.jsx';

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
  {
    path : "/counter",
    element : <Counter />
  },
  {
    path : "/birdie",
    element : <HomePage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
