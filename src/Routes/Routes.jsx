import Root from "../Root/Root";
import Menu from "../Pages/Menu/Menu";
import AdminRoute from "./AdminRoute";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Root/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Order from "../Pages/Order/Order/Order";
import ErrorPage from "../ErrorPage/ErrorPage";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Register from "../Pages/Register/Register";
import Review from "../Pages/Dashboard/Review/Review";
import Contact from "../Pages/Contact/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";
import Booking from "../Pages/Dashboard/Booking/Booking";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import ManageItem from "../Pages/Dashboard/ManagaItem/ManageItem";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory"
import ManageBooking from "../Pages/Dashboard/ManageBooking/ManageBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order> </Order>,
      },
      {
        path: "/contact",
        element: <Contact> </Contact>,
      },
      {
        path: "/login",
        element: <Login> </Login>,
      },
      {
        path: "/register",
        element: <Register> </Register>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard> </Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // Admin User Who visited all routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageBooking",
        element: (
          <AdminRoute>
            {" "}
            <ManageBooking> </ManageBooking>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            {" "}
            <ManageItem> </ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "myBooking",
        element: (
          <AdminRoute>
            <MyBooking> </MyBooking>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },

      // Genarel User Who visited the routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "payment",
        element: <Payment> </Payment>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory> </PaymentHistory>,
      },
      {
        path: "cart",
        element: <Cart> </Cart>,
      },
      {
        path: "review",
        element: <Review> </Review>,
      },
      {
        path: "booking",
        element: <Booking> </Booking>,
      },
    ],
  },
]);
