import AddCraftItem from "../components/AddCraftItem/AddCraftItem";
import AllArtCraft from "../components/AllArtCraft/AllArtCraft";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyArtCraftList from "../components/MyArtCraftList/MyArtCraftList";
import Register from "../components/Register/Register";
import Root from "../components/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomeCraftDetails from "../components/HomeCraftDetails/HomeCraftDetails";
import UpdateCraft from "../components/UpdateCraft/UpdateCraft";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SubDetails from "../components/SubDetails/SubDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/crafts/:id",
        element: (
          <PrivateRoute>
            <HomeCraftDetails></HomeCraftDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-assignment-ten.vercel.app/crafts/${params.id}`
          ),
      },
      {
        path: "/subcategory/:id",
        element: <SubDetails></SubDetails>,
        loader: ({ params }) =>
          fetch(`https://server-side-assignment-ten.vercel.app/subcategory/${params.id}`),
      },
      {
        path: "/all-art-craft/",
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: "/add-craft-item",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-art-craft-list",
        element: (
          <PrivateRoute>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update-craft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-assignment-ten.vercel.app/crafts/${params.id}`
          ),
      },
    ],
  },
]);
