import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Route/shared/Home/Home.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import Error from './Route/ErrorPage/Error.jsx';
import AddTouristSpot from './Components/AddTouristSpot.jsx';
import TouristSpot from './Pages/TouristSpot/TouristSpot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>
  },
  { 
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/addspot',
    element: <AddTouristSpot></AddTouristSpot>
  },
  {
    path: '/allspot',
    element: <TouristSpot></TouristSpot>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
