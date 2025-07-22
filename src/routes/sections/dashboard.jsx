import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

// User
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));

// Role
const RoleListPage = lazy(() => import('src/pages/dashboard/role/list'));

// Permission
const PermissionListPage = lazy(() => import('src/pages/dashboard/permission/list'));

// Feed
const FeedListPage = lazy(() => import('src/pages/dashboard/feed/list'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      {
        path: 'user',
        children: [
          { index: true, element: <UserListPage /> },
          { path: 'new', element: <UserCreatePage /> },
        ],
      },
      {
        path: 'role',
        children: [{ index: true, element: <RoleListPage /> }],
      },
      {
        path: 'permission',
        children: [{ index: true, element: <PermissionListPage /> }],
      },
      {
        path: 'device',
        children: [{ index: true, element: <PermissionListPage /> }],
      },
      {
        path: 'feed',
        children: [{ index: true, element: <FeedListPage /> }],
      },
    ],
  },
];
