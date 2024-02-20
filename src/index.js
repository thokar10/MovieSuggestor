import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MovieDetail from "./Components/MovieDetail";
import SearchPage from "./Components/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <h1>Error not found </h1>
      </>
    ),
  },

  // {
  //   path: "/detail",
  //   element: <DetailPage />,
  // },

  {
    path: "/movie/:movie_id",
    element: <MovieDetail />,
  },
  {
    path: "/movies?search=:movie_name",
    element: <SearchPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
