import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { layoutClasses } from 'src/layouts/classes';

// ----------------------------------------------------------------------

export function Main({ sx, children, layoutQuery, ...other }) {
  const theme = useTheme();

  const renderContent = (
    <Box
      sx={{
        p: 5,
        width: 1,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        boxShadow: theme.customShadows.card,
        maxWidth: 'var(--layout-auth-content-width)',
      }}
    >
      {children}
    </Box>
  );

  return (
    <Box
      component="main"
      className={layoutClasses.main}
      sx={{
        px: 2,
        py: 5,
        zIndex: 9,
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      {renderContent}
    </Box>
  );
}
