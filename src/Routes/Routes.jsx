import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import UserInput from "../pages/UserInput/UserInput";
import Update from "../pages/Update/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:5001/userInput"),
  },
  {
    path: "/userInput",
    element: <UserInput></UserInput>,
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({ params }) =>
      fetch(`http://localhost:5001/userInput/${params.id}`),
  },
]);
