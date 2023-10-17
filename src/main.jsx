import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import Admin from './Admin/Admin.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import CreateAcount from './CreateAcount/CreateAcount.jsx';
import User from './user/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <Signup></Signup>,
  },
  {
    path: "/admin12",
    element: <Admin></Admin>,
  },
  {
    path: "/createacount",
    element: <CreateAcount></CreateAcount>,
  },
  {
    path: "/user",
    element: <User></User>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
