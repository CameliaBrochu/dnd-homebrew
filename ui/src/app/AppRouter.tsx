import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  
import Root from "../pages/Home";
import ErrorPage from '../pages/ErrorPage';
import Adventures from '../pages/Adventures';
import Monsters from '../pages/Monsters';
import Items from '../pages/Items';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />
    },
    {
      path: "/adventures",
      element: <Adventures />,
    },
    {
      path: "/monsters",
      element: <Monsters />,
    },
    {
      path: "/items",
      element: <Items />,
    }
  ]);


const AppRouter:React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}
export default AppRouter;