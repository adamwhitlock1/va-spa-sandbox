// Helper styles for demo

import React from "react";
import "@department-of-veterans-affairs/formation/dist/formation.min.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { render } from "react-dom";
import HomePage from "./pages/HomePage";
import EditAddressPage from "./pages/EditAddressPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "edit-address",
    element: <EditAddressPage />
  }
]);

const App = () => {
  return (
    <div className="app vads-u-margin--2">
      <RouterProvider router={router} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
