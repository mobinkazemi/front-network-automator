import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import CardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function UserCreateView() {
  const renderRole = (
    <Stack
      sx={{
        flexDirection: { md: 'row' },
        alignItems: 'center',
        p: 2,
        bgcolor: 'background.neutral',
        borderRadius: 2,
        gap: 2,
      }}
    >
      <ListItemText
        primary="نقش کاربری"
        secondary="نقش کاربری را با توجه به سمت و نقش کاربر یا کارمند در تخصص کار خود میتوانید انتخاب نمائید."
        primaryTypographyProps={{ typography: 'button' }}
        secondaryTypographyProps={{ typography: 'caption', color: 'text.secondary', mt: 0.5 }}
        sx={{ width: 1 }}
      />

      <Stack sx={{ flexDirection: { md: 'row' }, width: 1, gap: 2 }}>
        <Stack sx={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
          <Typography
            component="span"
            variant="body2"
            sx={{
              color: 'text.secondary',
              display: { xs: 'none', md: 'block' },
              flexShrink: 0,
              width: 80,
            }}
          >
            نقش کاربر
          </Typography>

          <TextField
            id="select-currency-label-x"
            variant="outlined"
            select
            fullWidth
            size="small"
            label="Select"
            sx={{ [textFieldClasses.root]: { bgcolor: 'red' } }}
            // value={currency}
            // onChange={handleChangeCurrency}
            // helperText="Please select your currency"
            // InputLabelProps={{ htmlFor: `${variant}-select-currency-label` }}
            // inputProps={{ id: `${variant}-select-currency-label` }}
          >
            <MenuItem value="here">here</MenuItem>
          </TextField>
        </Stack>

        <Button
          variant="soft"
          color="primary"
          startIcon={<Iconify icon="heroicons:eye-20-solid" />}
          sx={{ borderRadius: 1.5 }}
        >
          مشاهده دسترسی ها
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <DashboardContent>
      <Card>
        <CardHeader
          title="ساخت و ویرایش کاربر"
          titleTypographyProps={{ color: 'primary' }}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.user.root}
              variant="outlined"
              startIcon={<Iconify icon="heroicons:chevron-right-20-solid" />}
            >
              بازگشت به لیست
            </Button>
          }
          sx={{ mb: 3, [`& .${cardHeaderClasses.action}`]: { m: 0 } }}
        />

        <Divider sx={{ mx: 3 }} />

        <Box sx={{ p: 3 }}>{renderRole}</Box>
      </Card>

      {/* <UserNewEditForm /> */}
    </DashboardContent>
  );
}
