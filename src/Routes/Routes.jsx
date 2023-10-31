import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:5001/userInput"),
  },
]);
