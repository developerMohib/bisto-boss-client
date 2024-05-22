import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Contact from "../Pages/Contact/Contact/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home> </Home>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>,
      },
      {
        path: '/order',
        element: <Order> </Order>,
      },
      {
        path: '/dashboard',
        element: <Dashboard> </Dashboard>,
      },
      {
        path: '/contact',
        element: <Contact> </Contact>,
      },
      {
        path: '/login',
        element: <Login> </Login>,
      },
      {
        path: '/register',
        element: <Register> </Register>,
      },
    ]
  },
]);
