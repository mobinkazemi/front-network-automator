import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignInView } from 'src/sections/auth/views';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignInView />
    </>
  );
}
