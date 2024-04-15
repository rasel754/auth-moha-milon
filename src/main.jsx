import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Root from './components/Root';
import AuthProvider from './Provider/AuthProvider';
import Orders from './components/Orders';
import PrivateRoutes from './Routes/PrivateRoutes';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/orders",
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: "/profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "/dashboard",
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
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
