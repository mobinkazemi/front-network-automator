import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import LinearProgress from '@mui/material/LinearProgress';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const ResetPasswordSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
});

// ----------------------------------------------------------------------

export function ResetPasswordView() {
  const defaultValues = { email: '' };

  const methods = useForm({
    resolver: zodResolver(ResetPasswordSchema),
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
    <>
      <Stack direction="row" justifyContent="space-between">
        <Logo width={144} height="auto" />

        <Fab
          component={RouterLink}
          href={paths.auth.signIn}
          color="inherit"
          variant="outlinedExtended"
        >
          <Iconify icon="heroicons:chevron-right-20-solid" width={24} />
          بازگشت
        </Fab>
      </Stack>

      <Box mt={8} textAlign="center">
        <Typography variant="h6" color="primary">
          فراموشی رمزعبور
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={1}>
          نام کاربری، شماره موبایل یا ایمیل خود را وارد نمائید
        </Typography>
      </Box>
    </>
  );

  const renderForm = (
    <Form methods={methods} onSubmit={onSubmit} style={{ marginTop: 40 }}>
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

        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          loadingIndicator="بازیابی رمزعبور..."
        >
          بازیابی رمزعبور
        </LoadingButton>
      </Stack>
    </Form>
  );

  const renderSteps = (
    <Stack columnGap={1} direction="row" mt={8}>
      <LinearProgress
        value={100}
        variant="determinate"
        color="inherit"
        sx={{ width: 1, height: 6 }}
      />

      <LinearProgress
        value={0}
        variant="determinate"
        color="inherit"
        sx={{ width: 1, height: 6 }}
      />

      <LinearProgress
        value={0}
        variant="determinate"
        color="inherit"
        sx={{ width: 1, height: 6 }}
      />
    </Stack>
  );

  return (
    <>
      {renderHead}

      {renderForm}

      {renderSteps}
    </>
  );
}
