import ErrorPages from "../components/Pages/ErrorPages/ErrorPages";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../components/Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "*",
    element: <Main></Main>,
    children: [
      {
        path: "*",
        element: <ErrorPages></ErrorPages>,
      },
    ],
  },
]);

export default router;
