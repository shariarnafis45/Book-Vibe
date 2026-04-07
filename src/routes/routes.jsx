import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Books from "../Pages/Books";

import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([{
    path : '/',
    Component : MainLayout,
    children : [
        {
            index : true,
            Component : Home

        },
        {
            path : '/books',
            Component : Books
        }
    ]
}])