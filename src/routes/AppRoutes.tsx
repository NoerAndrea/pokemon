import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pokedex } from "../pages/Pokedex";

const router = createBrowserRouter([
  {
    path: "/pokemon",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: <Pokedex />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
