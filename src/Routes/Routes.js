import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Category from "../pages/Category/Category/Category";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News/News";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Others/Profile/Profile";
import TermsAndConditions from "../pages/Others/TermsAndCondition/TermsAndConditions";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
