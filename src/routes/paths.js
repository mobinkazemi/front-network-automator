// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  // faqs: '/faqs',
  // minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    signIn: `${ROOTS.AUTH}/sign-in`,
    resetPassword: `${ROOTS.AUTH}/reset-password`,
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      // list: `${ROOTS.DASHBOARD}/user/list`,
      new: `${ROOTS.DASHBOARD}/user/new`,
    },
    role: {
      root: `${ROOTS.DASHBOARD}/role`,
      list: `${ROOTS.DASHBOARD}/role/list`,
    },
    permission: {
      root: `${ROOTS.DASHBOARD}/permission`,
      // list: `${ROOTS.DASHBOARD}/permission/list`,
    },
    device: {
      root: `${ROOTS.DASHBOARD}/device`,
      // list: `${ROOTS.DASHBOARD}/device/list`,
    },
    feed: {
      root: `${ROOTS.DASHBOARD}/feed`,
      // list: `${ROOTS.DASHBOARD}/device/list`,
    }
  },
};
