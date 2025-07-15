import {
  Box, Grid, TextField, Typography, MenuItem, Avatar, Button, IconButton,
  Select, FormControl, InputLabel, Switch, Divider, RadioGroup, Radio, FormControlLabel
} from '@mui/material';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import AutorenewIcon from '@mui/icons-material/Autorenew';

import { useState } from 'react';

export function SignInView() {
  const [gender, setGender] = useState('');
  const [isActive, setIsActive] = useState(true);

  return (
    <Box sx={{ p: 4, direction: 'rtl', fontFamily: 'IRANSans', bgcolor: '#fff', borderRadius: 4, boxShadow: 2 }}>
      <Typography fontSize={18} color="orange" fontWeight="bold" mb={2}>
        ساخت و ویرایش کاربر
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* نقش کاربر */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="role-label">نقش کاربر</InputLabel>
            <Select labelId="role-label" value="کارشناس شبکه کامپیوتر" label="نقش کاربر">
              <MenuItem value="کارشناس شبکه کامپیوتر">کارشناس شبکه کامپیوتر</MenuItem>
              {/* سایر نقش‌ها */}
            </Select>
          </FormControl>
        </Grid>

        {/* تصویر پروفایل */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box position="relative" display="inline-block">
            <Avatar sx={{ width: 72, height: 72 }} />
            <IconButton
              color="primary"
              component="label"
              sx={{ position: 'absolute', bottom: 0, left: 0, bgcolor: '#fff', boxShadow: 1 }}
            >
              {/* <PhotoCamera fontSize="small" /> */}
              <input hidden accept="image/*" type="file" />
            </IconButton>
          </Box>
        </Grid>

        {/* نام و نام خانوادگی */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="نام" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="نام خانوادگی" />
        </Grid>

        {/* کد ملی و جنسیت */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="کد ملی" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>جنسیت</InputLabel>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <MenuItem value="male">مرد</MenuItem>
              <MenuItem value="female">زن</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* تحصیلات و ایمیل */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="تحصیلات" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="ایمیل" type="email" />
        </Grid>

        {/* موبایل و تاریخ تولد */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="شماره موبایل" error helperText="شماره معتبر وارد کنید" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="تاریخ تولد"
            InputProps={{
              // endAdornment: <CalendarMonthIcon />,
            }}
          />
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ my: 3 }} />
        </Grid>

        {/* رمز عبور انتخابی */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="رمز عبور"
            value="sw45ff9sad9wed32s4"
            InputProps={{
              endAdornment: (
                <Button color="warning" sx={{ whiteSpace: 'nowrap' }}>
                  تولید رمز
                </Button>
              ),
            }}
          />
        </Grid>

        {/* تغییر رمز در هنگام ورود */}
        <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="space-between">
          <Typography>تغییر رمز هنگام ورود</Typography>
          <Switch checked />
        </Grid>

        {/* فعال بودن اکانت */}
        <Grid item xs={12} md={6}>
          <Typography mb={1}>اکانت فعال؟</Typography>
          <RadioGroup row value={isActive ? 'yes' : 'no'} onChange={(e) => setIsActive(e.target.value === 'yes')}>
            <FormControlLabel value="yes" control={<Radio />} label="بله" />
            <FormControlLabel value="no" control={<Radio />} label="خیر" />
          </RadioGroup>
        </Grid>

        {/* دکمه ثبت */}
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#ff7900',
              fontWeight: 'bold',
              fontSize: '1rem',
              py: 1.5,
              borderRadius: 2,
              mt: 2,
              ':hover': {
                backgroundColor: '#e86e00',
              },
            }}
          >
            ثبت کاربر جدید
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
