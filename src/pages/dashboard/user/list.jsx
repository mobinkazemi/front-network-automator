import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { UserListView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

const metadata = { title: `User list | ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <UserListView />
    </>
  );
}
