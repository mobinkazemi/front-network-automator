import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SwitchesList from "./pages/Switches/SwitchesListPage/SwitchesListPage";
import { ROUTES_ENUM } from "./shared/enums/routes.enum";
import CreateSwitchPage from "./pages/Switches/CreateSwitch/CreateSwitchPage";
import "./style.css";
const router = createBrowserRouter([
  {
    path: ROUTES_ENUM.HOME,
    element: <HomePage></HomePage>,
  },
  {
    path: ROUTES_ENUM.SWITCHES_LIST,
    element: <SwitchesList></SwitchesList>,
  },
  {
    path: ROUTES_ENUM.SWITCHES_CREATE,
    element: <CreateSwitchPage></CreateSwitchPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
