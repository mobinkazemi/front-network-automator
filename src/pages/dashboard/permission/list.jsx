import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PermissionListView } from 'src/sections/permission/view';

// ----------------------------------------------------------------------

const metadata = { title: `Permission list | ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PermissionListView />
    </>
  );
}
