import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Login from "./Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
