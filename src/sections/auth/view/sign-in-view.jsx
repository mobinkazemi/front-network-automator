import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';

import { Logo } from 'src/components/logo';
import { Image } from 'src/components/image';
import { AnimateLogo2 } from 'src/components/animate';
import { Form, Field } from 'src/components/hook-form';
import { Iconify, SocialIcon } from 'src/components/iconify';

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
  const navigate = useNavigate();

  const theme = useTheme();

  const password = useBoolean();

  const defaultValues = { username: '', password: '' };

  const methods = useForm({
    // resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    fetch('http://172.17.17.70:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then((data1) => navigate('/dashboard'));
  });

  const renderLogo = <AnimateLogo2 sx={{ mb: 3, mx: 'auto' }} />;

  const renderHead = (
    <Stack alignItems="center" spacing={1.5} sx={{ mb: 5 }}>
      <Typography variant="h5">Sign in to your account</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`Don't have an account?`}
        </Typography>

        {/* <Link component={RouterLink} href={paths.authDemo.centered.signUp} variant="subtitle2">
          Get started
        </Link> */}
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}>
          نام کاربری
        </Box>

        <Field.Text variant="filled" name="username" label="نام کاربری" />
      </Stack>

      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}>
          رمزعبور
        </Box>

        <Field.Text
          variant="filled"
          name="password"
          label="رمزعبور"
          type={password.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Link
          component={RouterLink}
          // href={paths.authDemo.centered.resetPassword}
          variant="body2"
          color="text.secondary"
        >
          رمزعبور خود را فراموش کرده ام!
        </Link>

        <LoadingButton
          color="primary"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          loadingIndicator="تایید شماره موبایل..."
        >
          تایید شماره موبایل
        </LoadingButton>
      </Stack>
    </Stack>
  );

  const renderSignInWithSocials = (
    <>
      <Divider
        sx={{
          my: 3,
          typography: 'overline',
          color: 'text.disabled',
          '&::before, :after': { borderTopStyle: 'dashed' },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={1}>
        <IconButton>
          <SocialIcon icon="google" width={22} />
        </IconButton>

        <IconButton>
          <SocialIcon icon="github" width={22} />
        </IconButton>

        <IconButton>
          <SocialIcon icon="twitter" width={22} />
        </IconButton>
      </Stack>
    </>
  );

  return (
    <>
      {/* {renderLogo} */}
      {/* {renderHead} */}
      {/* <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form> */}
      {/* {renderSignInWithSocials} */}

      <Stack direction="row" spacing={5}>
        <Stack sx={{ width: 1 }}>
          <Logo width={176} height="auto" sx={{ mb: 3, mx: 'auto' }} />

          <Typography variant="h5" color="primary" sx={{ mb: 5, mx: 'auto' }}>
            ورود به حساب کاربری
          </Typography>

          <Form methods={methods} onSubmit={onSubmit}>
            {renderForm}
          </Form>
        </Stack>

        <Box sx={{ width: 1 }}>
          <Image alt="cover" src={`${CONFIG.site.basePath}/assets/images/auth/banner.jpg`} />
        </Box>
      </Stack>
    </>
  );
}
