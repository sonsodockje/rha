import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Layout from "./pages/Layout";
import BookablesPage from "./components/Bookables/BookablesPage";
import BookingsPage from "./components/Bookings/BookingsPage";
import UsersPage from "./components/Users/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "bookables",
        element: <BookablesPage />,
      },
      {
        path: "bookings",
        element: <BookingsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
