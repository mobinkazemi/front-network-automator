import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthLayout } from 'src/layouts/auth';

import { SplashScreen } from 'src/components/loading-screen';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const SignInPage = lazy(() => import('src/pages/auth/sign-in'));
const ResetPasswordPage = lazy(() => import('src/pages/auth/reset-password'));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'sign-in',
        element: (
          <GuestGuard>
            <AuthLayout>
              <SignInPage />
            </AuthLayout>
          </GuestGuard>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <GuestGuard>
            <AuthLayout>
              <ResetPasswordPage />
            </AuthLayout>
          </GuestGuard>
        ),
      },
    ],
  },
];
