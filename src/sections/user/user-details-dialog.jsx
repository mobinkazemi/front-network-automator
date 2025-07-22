import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function UserDetailsDialog({ item, open, onClose }) {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle color="primary">مشاهده جزئیات کاربری</DialogTitle>

      <DialogContent>
        <Stack rowGap={3}>
          <Stack direction="row" alignItems="flex-end">
            <Stack spacing={2} direction="row" alignItems="flex-end" flexGrow={1}>
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                }}
              />

              <ListItemText
                primary={`${item.firstName} ${item.lastName}`}
                secondary={item.email}
                primaryTypographyProps={{ typography: 'button' }}
                secondaryTypographyProps={{
                  typography: 'caption',
                  color: 'text.disabled',
                  mt: 0.5,
                }}
              />
            </Stack>

            <ListItemText
              primary="نقش کاربر:"
              secondary="کارشناس شبکه کامپیوتر"
              primaryTypographyProps={{ typography: 'body2', color: 'text.disabled' }}
              secondaryTypographyProps={{ typography: 'button', color: 'common.black', mt: 0.5 }}
              sx={{ flex: 'none' }}
            />
          </Stack>

          <Divider />

          <Box
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
            alignItems="center"
            columnGap={3}
            rowGap={1.5}
          >
            <Stack direction="row" alignItems="center">
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.disabled', flexGrow: 1 }}
              >
                نام کاربری
              </Typography>

              <Typography variant="button">{item.username}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.disabled', flexGrow: 1 }}
              >
                جنسیت
              </Typography>

              <Typography variant="button">{item.gender === 1 ? 'مرد' : 'زن'}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.disabled', flexGrow: 1 }}
              >
                کدملی
              </Typography>

              <Typography variant="button">{item.nationalId ?? '-'}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.disabled', flexGrow: 1 }}
              >
                تحصیلات
              </Typography>

              <Typography variant="button">{item.education ?? '-'}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.disabled', flexGrow: 1 }}
              >
                شماره موبایل
              </Typography>

              <Typography variant="button">{item.cellphone ?? '-'}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.disabled', flexGrow: 1 }}
              >
                تاریخ تولد
              </Typography>

              <Typography variant="button">{item.birthday ?? '-'}</Typography>
            </Stack>
          </Box>

          <Divider />

          <Stack rowGap={1.5}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row">
                <Iconify
                  icon="heroicons:shield-exclamation-20-solid"
                  sx={{ color: 'error.main' }}
                />
                <Typography variant="button" sx={{ ml: 0.5 }}>
                  فعالسازی رمز دو مرحله ای (ایمیل - پیامک)
                </Typography>
              </Stack>

              <Stack direction="row">
                <Iconify
                  icon="heroicons:shield-exclamation-20-solid"
                  sx={{ color: 'error.main' }}
                />
                <Typography variant="button" sx={{ ml: 0.5 }}>
                  تغییر رمزعبور در هنگام ورود
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
                تعداد سابقه ذخیره رمزعبور
              </Typography>

              <Typography variant="button">{item.passwordHistoryCount}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
                تعداد روز تغییر رمزعبور
              </Typography>

              <Typography variant="button">{item.expirePasswordDays ?? '-'}</Typography>

              {item.expirePasswordDays && (
                <Box component="span" sx={{ color: 'text.disabled', ml: 0.5 }}>
                  روز
                </Box>
              )}
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
                تعداد روز مهلت اضافه پس از انقضای رمزعبور
              </Typography>

              <Typography variant="button">{item.passwordAdvantageDays ?? '-'}</Typography>

              {item.passwordAdvantageDays && (
                <Box component="span" sx={{ color: 'text.disabled', ml: 0.5 }}>
                  روز
                </Box>
              )}
            </Stack>
          </Stack>

          <Divider />

          <Stack rowGap={1.5}>
            <Stack direction="row">
              <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
                <Typography component="span" variant="body2" sx={{ color: 'text.disabled' }}>
                  تاریخ ایجاد حساب کاربری
                </Typography>

                <Typography variant="button" sx={{ ml: 1 }}>
                  {item.createdAt}
                </Typography>
              </Stack>

              <Label variant="soft" color="success">
                {item.active ? 'فعال' : 'غیرفعال'}
              </Label>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
                تاریخ غیرفعال شدن حساب کاربر پس از ایجاد
              </Typography>

              <Typography variant="button" color="primary">
                {item.deactivedAt ?? '-'}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button fullWidth variant="contained" onClick={onClose}>
          بستن پنجره
        </Button>
      </DialogActions>
    </Dialog>
  );
}
