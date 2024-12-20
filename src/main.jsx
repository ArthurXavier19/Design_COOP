import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Inicial from './Inicial.jsx'
import Entrar from "./Entrar.jsx";
import Cadastrar from "./Cadastrar.jsx";
import Feed from "./Feed.jsx";
import Publicar from "./Publicar.jsx";
import Pesquisa from "./Pesquisa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial />,
  },
  {
    path: "entrar",
    element: <Entrar />,
  },
  {
    path: "cadastrar",
    element: <Cadastrar />,
  },
  {
    path: "feed",
    element: <Feed />,
  },
  {
    path: "publicar",
    element: <Publicar />,
  },
  {
    path: "pesquisa",
    element: <Pesquisa />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);