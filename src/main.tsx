import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SwitchesList from "./pages/Switches/SwitchesListPage/SwitchesListPage";
import { ROUTES_ENUM } from "./shared/enums/routes.enum";
import CreateSwitchPage from "./pages/Switches/CreateSwitch/CreateSwitchPage";
import "./index.css";
import CommandOnSwitchPage from "./pages/Switches/CommandOnSwitch/CommandOnSwitchPage";
import UpdateSwitchPage from "./pages/Switches/UpdateSwitch/UpdateSwitchPage";
import LoginPage from "./pages/Auth/Login/LoginPage";
import RegisterPage from "./pages/Auth/Register/RegisterPage";
import SwitchesHardeningPage from "./pages/Switches/Hardening/HardeningPage";
const router = createBrowserRouter([
  {
    path: ROUTES_ENUM.HOME,
    element: <HomePage></HomePage>,
  },
  {
    path: ROUTES_ENUM.LOGIN,
    element: <LoginPage></LoginPage>,
  },
  {
    path: ROUTES_ENUM.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ROUTES_ENUM.SWITCHES_LIST,
    element: <SwitchesList></SwitchesList>,
  },
  {
    path: ROUTES_ENUM.SWITCHES_CREATE,
    element: <CreateSwitchPage></CreateSwitchPage>,
  },
  {
    path: ROUTES_ENUM.SWITCHES_TERMINAL,
    element: <CommandOnSwitchPage />,
  },
  {
    path: ROUTES_ENUM.SWITCHES_UPDATE,
    element: <UpdateSwitchPage />,
  },
  {
    path: ROUTES_ENUM.SWITCHES_HARDENING,
    element: <SwitchesHardeningPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
