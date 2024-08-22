import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pokedex } from "../pages/Pokedex";
import { Pokemon } from "../pages/Pokemon";

const router = createBrowserRouter([
  {
    path: "/pokemon",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: <Pokedex />,
  },
  {
    path: "/pokemon/:pokemonId",
    element: <Pokemon />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
