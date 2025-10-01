import { Outlet } from "react-router";

import { DashboardLayout } from "@/layouts/dashboard";

import PermissionListPage from "@/pages/dashboard/permission/list";

import FeedListPage from "@/pages/dashboard/feed/list";

import UserListPage from "@/pages/dashboard/user/list";
import UserCreatePage from "@/pages/dashboard/user/new";

import DeviceListPage from "@/pages/dashboard/device/list";
import DeviceDetailsPage from "@/pages/dashboard/device/details";
import DeviceHardeningCheckPage from "@/pages/dashboard/device/hardening-check";
import DeviceHardeningResultPage from "@/pages/dashboard/device/hardening-result";

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
      {
        path: "user",
        children: [
          { index: true, element: <UserListPage /> },
          { path: "new", element: <UserCreatePage /> },
        ],
      },
      {
        path: "permission",
        children: [{ index: true, element: <PermissionListPage /> }],
      },
      {
        path: "feed",
        children: [{ index: true, element: <FeedListPage /> }],
      },
      {
        path: "device",
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
