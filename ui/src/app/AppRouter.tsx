import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  
import Root from "../pages/Home";
import ErrorPage from '../pages/ErrorPage';
import Adventures from '../pages/Adventures';
import Monsters from '../pages/Monsters';
import Items from '@/pages/items/Items';
import NewItem from "@/pages/items/NewItem";

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
      element: <Items />
    },
    {
      path: "/items/new",
      element: <NewItem />
    }
  ]);


const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
}
export default AppRouter;