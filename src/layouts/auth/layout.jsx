import { CONFIG } from 'src/config-global';
import { stylesMode } from 'src/theme/styles';

import { Main } from './main';
import { LayoutSection } from '../core/layout-section';

// ----------------------------------------------------------------------

export function AuthLayout({ sx, children }) {
  const layoutQuery = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={null}
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-auth-content-width': '1200px',
      }}
      sx={{
        '&::before': {
          width: 1,
          height: 1,
          zIndex: 1,
          content: "''",
          opacity: 0.24,
          position: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: `url(${CONFIG.site.basePath}/assets/background/background-3-blur.webp)`,
          [stylesMode.dark]: { opacity: 0.08 },
        },
        ...sx,
      }}
    >
      <Main layoutQuery={layoutQuery}>{children}</Main>
    </LayoutSection>
  );
}
