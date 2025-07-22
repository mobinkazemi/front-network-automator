import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import { UserTable } from '../user-table';

// ----------------------------------------------------------------------

export function UserListView() {
  return (
    <DashboardContent>
      <Card>
        <CardHeader
          title="لیست کاربران"
          titleTypographyProps={{ color: 'primary' }}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.user.new}
              variant="contained"
              startIcon={<Iconify icon="heroicons:plus-small-solid" />}
            >
              کاربر جدید
            </Button>
          }
          sx={{ mb: 3, [`& .${cardHeaderClasses.action}`]: { m: 0 } }}
        />

        <Divider sx={{ mx: 3 }} />

        <Box sx={{ p: 3 }}>
          <UserTable />
        </Box>
      </Card>
    </DashboardContent>
  );
}
