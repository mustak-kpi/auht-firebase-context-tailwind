import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Main from './Layout/Main.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx'; 
import AuthProvider from './assets/provider/AuthProvider.jsx';
import Oders from './components/Oders.jsx';
import PreviteInformaction from './includecs/PreviteInformaction.jsx';
import Profile from './components/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'register',
      element: <Register></Register>
    },
    {
      path: 'profile',
      element: <PreviteInformaction><Profile></Profile></PreviteInformaction>
    },
    {
      path: 'orders',
      element: <PreviteInformaction><Oders></Oders></PreviteInformaction>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>

 <RouterProvider router={router} />
</AuthProvider>

 
  </React.StrictMode>,
)
