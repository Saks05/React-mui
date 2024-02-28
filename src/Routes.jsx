// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Authenticate from "./pages/Authenticate";
import Dashboard from "./pages/Dashboard";


const Routes = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "", element: <Navigate to="/auth" replace /> },
        {
          path: "/auth",
          element: <Authenticate />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
};

export default Routes;
