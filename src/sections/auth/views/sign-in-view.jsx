import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';

import { Logo } from 'src/components/logo';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

// ----------------------------------------------------------------------

export function SignInView() {
  const password = useBoolean();

  const defaultValues = { email: '', password: '' };

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = (
    <Stack rowGap={3} alignItems="center">
      <Logo width={144} height="auto" />

      <Typography variant="h6" color="primary">
        ورود به حساب کاربری
      </Typography>
    </Stack>
  );

  const renderForm = (
    <Form methods={methods} onSubmit={onSubmit} style={{ width: '100%' }}>
      <Stack spacing={3}>
        <Stack direction="row">
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            display={{ xs: 'none', md: 'block' }}
            flexShrink={0}
            width="33.333333%"
            pt={2}
          >
            نام کاربری
          </Typography>

          <Field.Text variant="filled" name="email" label="نام کاربری" />
        </Stack>

        <Stack direction="row">
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            display={{ xs: 'none', md: 'block' }}
            flexShrink={0}
            width="33.333333%"
            pt={2}
          >
            رمزعبور
          </Typography>

          <Field.Text
            variant="filled"
            name="password"
            label="رمزعبور"
            type={password.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify
                      icon={
                        password.value ? 'heroicons:eye-slash-16-solid' : 'heroicons:eye-16-solid'
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Divider sx={{ mb: 2 }} />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Link
            component={RouterLink}
            href={paths.auth.resetPassword}
            variant="body2"
            color="text.secondary"
          >
            رمزعبور خود را فراموش کرده ام
          </Link>

          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            loadingIndicator="ورود..."
          >
            ورود
          </LoadingButton>
        </Stack>
      </Stack>
    </Form>
  );

  const renderCover = (
    <Box width={1} display={{ xs: 'none', md: 'block' }}>
      <Image alt="cover" src={`${CONFIG.site.basePath}/assets/images/auth/cover.jpg`} />
    </Box>
  );

  return (
    <Stack columnGap={5} direction="row">
      <Stack rowGap={5} alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
        {renderHead}

        {renderForm}

        <Typography variant="body2" display={{ xs: 'none', md: 'flex' }}>
          اولین سامانه و پلتفرم آنلاین انجام کلیه امور اداری و پشتیبانی
        </Typography>
      </Stack>

      {renderCover}
    </Stack>
  );
}
