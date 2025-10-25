import { lazy } from "react";
import { Outlet } from "react-router";

import { DashboardLayout } from "@/layouts/dashboard";

import PermissionListPage from "@/pages/dashboard/permission/list";

import FeedListPage from "@/pages/dashboard/feed/list";

import UserListPage from "@/pages/dashboard/user/list";

import DeviceListPage from "@/pages/dashboard/device/list";
import DeviceDetailsPage from "@/pages/dashboard/device/details";
import DeviceHardeningCheckPage from "@/pages/dashboard/device/hardening-check";
import DeviceHardeningResultPage from "@/pages/dashboard/device/hardening-result";
import { ValidateQueryParams } from "../components/validate-query-params";

// ----------------------------------------------------------------------

// Overview
const IndexPage = lazy(() => import("@/pages/dashboard"));

// User
const UserCreatePage = lazy(() => import("@/pages/dashboard/user/new"));

// Role
const RoleListPage = lazy(() => import("@/pages/dashboard/role/list"));
const RoleDetailsPage = lazy(() => import("@/pages/dashboard/role/details"));

// Permission
const PermissionDetailsPage = lazy(
  () => import("@/pages/dashboard/permission/details"),
);

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <IndexPage /> },
      {
        path: "user",
        element: (
          <ValidateQueryParams
            allowed={[
              "list_limit",
              "list_page",
              "list_sort",
              "device",
              "type",
              "createdAt",
            ]}
          >
            <Outlet />
          </ValidateQueryParams>
        ),
        children: [
          { index: true, element: <UserListPage /> },
          { path: "new", element: <UserCreatePage /> },
        ],
      },
      {
        path: "role",
        element: (
          <ValidateQueryParams
            allowed={[
              "list_limit",
              "list_page",
              "list_sort",
              "device",
              "type",
              "createdAt",
            ]}
          >
            <Outlet />
          </ValidateQueryParams>
        ),
        children: [
          { index: true, element: <RoleListPage /> },
          { path: ":id", element: <RoleDetailsPage /> },
        ],
      },
      {
        path: "permission",
        element: (
          <ValidateQueryParams
            allowed={[
              "list_limit",
              "list_page",
              "list_sort",
              "device",
              "type",
              "createdAt",
            ]}
          >
            <Outlet />
          </ValidateQueryParams>
        ),
        children: [
          { index: true, element: <PermissionListPage /> },
          { path: ":id", element: <PermissionDetailsPage /> },
        ],
      },
      {
        path: "feed",
        element: (
          <ValidateQueryParams
            allowed={[
              "list_limit",
              "list_page",
              "list_sort",
              "device",
              "type",
              "createdAt",
            ]}
          >
            <Outlet />
          </ValidateQueryParams>
        ),
        children: [{ index: true, element: <FeedListPage /> }],
      },
      {
        path: "device",
        element: (
          <ValidateQueryParams
            allowed={[
              "list_limit",
              "list_page",
              "list_sort",
              "device",
              "type",
              "createdAt",
            ]}
          >
            <Outlet />
          </ValidateQueryParams>
        ),
        children: [
          { index: true, element: <DeviceListPage /> },
          { path: ":deviceId", element: <DeviceDetailsPage /> },
          {
            path: ":deviceId/cis/:cisId",
            element: <DeviceHardeningCheckPage />,
          },
          {
            path: ":deviceId/cis/:cisId/version/:version",
            element: <DeviceHardeningResultPage />,
          },
        ],
      },
    ],
  },
];
