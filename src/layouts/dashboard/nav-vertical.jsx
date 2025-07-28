import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';

import axiosInstance from 'src/utils/axios';

import { varAlpha, hideScrollY } from 'src/theme/styles';

import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { NavSectionMini, NavSectionVertical } from 'src/components/nav-section';

// ----------------------------------------------------------------------

export function NavVertical({ sx, data, slots, isNavMini, layoutQuery, onToggleNav, ...other }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axiosInstance.get('user/myself');
      setUser(response.data.data);
    };

    fetchUser();
  }, []);

  const theme = useTheme();

  const renderNavVertical = (
    <>
      {slots?.topArea ?? (
        <Box sx={{ mx: 'auto', pt: 5, pb: 1 }}>
          <Logo width={144} height="auto" />
        </Box>
      )}

      <Box sx={{ bgcolor: 'background.neutral', mx: 2, borderRadius: 2, p: 2, my: 3 }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar
            sx={{
              width: 45,
              height: 45,
              border: `solid 2px ${theme.vars.palette.primary.main}`,
            }}
          />

          <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
            secondary={user.email}
            primaryTypographyProps={{ typography: 'button' }}
            secondaryTypographyProps={{ typography: 'caption', color: 'text.disabled' }}
            sx={{ flex: 'none' }}
          />
        </Stack>

        <Box
          sx={{
            borderRadius: 1.5,
            bgcolor: '#FFE4CD',
            display: 'flex',
            justifyContent: 'center',
            mt: 2.5,
            color: 'primary.main',
            py: 1,
            fontWeight: 'bold',
          }}
        >
          ادمین کل
        </Box>
      </Box>

      <Scrollbar fillContent>
        <NavSectionVertical data={data} sx={{ px: 2, flex: '1 1 auto' }} {...other} />

        {slots?.bottomArea}
      </Scrollbar>
    </>
  );

  const renderNavMini = (
    <>
      {slots?.topArea ?? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2.5 }}>
          <Logo />
        </Box>
      )}

      <NavSectionMini
        data={data}
        sx={{ pb: 2, px: 0.5, ...hideScrollY, flex: '1 1 auto', overflowY: 'auto' }}
        {...other}
      />

      {slots?.bottomArea}
    </>
  );

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        bgcolor: 'var(--layout-nav-bg)',
        zIndex: 'var(--layout-nav-zIndex)',
        width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)})`,
        transition: theme.transitions.create(['width'], {
          easing: 'var(--layout-transition-easing)',
          duration: 'var(--layout-transition-duration)',
        }),
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
    >
      {isNavMini ? renderNavMini : renderNavVertical}
    </Box>
  );
}
