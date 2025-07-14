import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import { Home } from "../src/Pages/Home";
import { Error404 } from "../src/Components/SharedComponent/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
