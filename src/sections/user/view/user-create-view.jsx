import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import CardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';
import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

const newUserSchema = zod.object({
  username: zod.string().min(1),
  firstName: zod.string().min(1),
  lastName: zod.string().min(1),
  gender: zod.string(),
  nationalId: zod.string(),
  education: zod.string(),
  cellphone: zod.string().min(1),
  email: zod.string(),
  birthday: zod.string(),
  password: zod.string().min(6),
  passwordHistoryCount: zod.string(),
  expirePasswordDays: zod.string(),
  passwordAdvantageDays: zod.string(),
});

// ----------------------------------------------------------------------

export function UserCreateView() {
  const methods = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      gender: '',
      nationalId: '',
      education: '',
      cellphone: '',
      email: '',
      birthday: '',
      password: '',
      passwordHistoryCount: '',
      expirePasswordDays: '',
      passwordAdvantageDays: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const response = await axiosInstance.post('auth/register', data)
    console.log(response)
  });

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

        <Form methods={methods} onSubmit={onSubmit}>
          <Stack rowGap={3} sx={{ p: 3 }}>
            {renderRole}

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              <Field.Text variant="filled" name="username" label="نام کاربری" />

              <Field.Text variant="filled" name="firstName" label="نام" />

              <Field.Text variant="filled" name="lastName" label="نام خانوادگی" />

              <Field.Select variant="filled" name="gender" label="جنسیت">
                <MenuItem value={1}>مرد</MenuItem>
                <MenuItem value={2}>زن</MenuItem>
              </Field.Select>

              <Field.Text variant="filled" name="nationalId" label="کدملی" />

              <Field.Select variant="filled" name="education" label="تحصیلات">
                <MenuItem value="سیکل">سیکل</MenuItem>
                <MenuItem value="پیش دانشگاهی">پیش دانشگاهی</MenuItem>
                <MenuItem value="دیپلم">دیپلم</MenuItem>
                <MenuItem value="کاردانی">کاردانی</MenuItem>
                <MenuItem value="کارشناسی">کارشناسی</MenuItem>
                <MenuItem value="کارشناسی ارشد">کارشناسی ارشد</MenuItem>
                <MenuItem value="دکترا">دکترا</MenuItem>
              </Field.Select>

              <Field.Text variant="filled" name="cellphone" label="شماره موبایل" />

              <Field.Text variant="filled" name="email" label="ایمیل" />

              <Field.Text variant="filled" name="birthday" label="تاریخ تولد" />

              <FormControlLabel
                control={<Switch defaultChecked inputProps={{ id: 'comments-switch' }} />}
                label="فعالسازی رمز دومرحله ای (ایمیل - پیامک)"
              />
            </Box>

            <Divider />

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              <Field.Text variant="filled" name="password" label="رمزعبور" />

              <Field.Text
                variant="filled"
                name="passwordHistoryCount"
                label="تعداد سابقه ذخیره رمزعبور"
              />

              <div />

              <FormControlLabel
                control={<Switch defaultChecked inputProps={{ id: 'comments-switch' }} />}
                label="تغییر رمزعبور در هنگام ورود"
              />

              <div />

              <div />

              <Field.Text
                variant="filled"
                name="expirePasswordDays"
                label="تعداد روز تغییر رمزعبور"
              />

              <Field.Text
                variant="filled"
                name="passwordAdvantageDays"
                label="تعداد روز مهلت اضافه پس از انقضای رمزعبور"
              />
            </Box>

            <Divider />

            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
              sx={{ ml: 'auto' }}
            >
              ثبت کاربر جدید
            </LoadingButton>
          </Stack>
        </Form>
      </Card>

      {/* <UserNewEditForm /> */}
    </DashboardContent>
  );
}
