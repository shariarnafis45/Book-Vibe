import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Books from "../Pages/Books";

import MainLayout from "../Layout/MainLayout";
import Error404 from "../Pages/NotFound404";
import NotFound404 from "../Pages/NotFound404";
import BookDetails from "../Pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/book-details/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <NotFound404 />,
  },
]);
