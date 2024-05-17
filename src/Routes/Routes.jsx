import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home> </Home>
      },
    ]
  },
]);
