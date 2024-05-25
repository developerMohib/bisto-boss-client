import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Contact from "../Pages/Contact/Contact/Contact";
// import PrivateRoutes from "./PrivateRoutes";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Dashboard from "../Root/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Payment from "../Pages/Dashboard/Payment/Payment"
import Review from "../Pages/Dashboard/Review/Review";
import Booking from "../Pages/Dashboard/Booking/Booking";

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
        path: '/order/:category',
        element: <Order> </Order>,
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
  {
    path: 'dashboard',
    element: <Dashboard> </Dashboard>,
    children:[
      {
        path: 'userHome',
        element: <UserHome></UserHome>,
      },
      {
        path: 'reservation',
        element: <Reservation></Reservation>,
      },
      {
        path: 'payment',
        element: <Payment> </Payment>,
      },
      {
        path: 'cart',
        element: <Cart> </Cart>,
      },
      {
        path: 'review',
        element: <Review> </Review>,
      },
      {
        path: 'booking',
        element: <Booking> </Booking>,
      },
    ]
  }
]);
