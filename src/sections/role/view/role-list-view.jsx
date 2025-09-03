import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Fab, { fabClasses } from '@mui/material/Fab';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import CardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import axiosInstance from 'src/utils/axios';

import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

// import { UserTable } from '../user-table';

// ----------------------------------------------------------------------

export function RoleListView() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await axiosInstance.get('role/list');
      setRoles(response.data.data);
    };

    fetchRoles();
  }, []);

  const handleDelete = async (roleId) => {
    try {
      await axiosInstance.delete('role/delete', {
        data: { roleId },
      });

      toast.success('نقش با موفقیت حذف شد');
    } catch (error) {
      toast.error(error.response.data.detail);
    }
  };

  return (
    <DashboardContent>
      <Card>
        <CardHeader
          title="لیست نقش ها و سمت ها"
          titleTypographyProps={{ color: 'primary' }}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.user.new}
              variant="contained"
              startIcon={<Iconify icon="heroicons:plus-small-solid" />}
            >
              نقش جدید
            </Button>
          }
          sx={{ mb: 3, [`& .${cardHeaderClasses.action}`]: { m: 0 } }}
        />

        <Divider sx={{ mx: 3 }} />

        <Stack sx={{ p: 3, pb: 0, flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              placeholder="نام نقش را جستجو کنید..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="heroicons:magnifying-glass-20-solid" width={24} />
                  </InputAdornment>
                ),
              }}
              sx={{ maxWidth: { md: 360 } }}
            />
          </Box>

          <TextField
            placeholder="تاریخ ایجاد"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => {}} edge="end">
                    <Iconify icon="heroicons:calendar-20-solid" width={24} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: { md: 180 } }}
          />

          <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 180 } }}>
            <InputLabel htmlFor="role-filter-sort-select-label">مرتب سازی</InputLabel>

            <Select
              //   value={filters.state.service}
              //   onChange={handleFilterService}
              input={<OutlinedInput label="مرتب سازی" />}
              renderValue={(selected) => selected.map((value) => value).join(', ')}
              inputProps={{ id: 'role-filter-sort-select-label' }}
              sx={{ maxWidth: { md: 180 } }}
            >
              <MenuItem value="asc">جدیدترین</MenuItem>
              <MenuItem value="desc">قدیمی ترین</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Box
          sx={{ p: 3 }}
          gap={2}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        >
          {roles.map((role) => (
            <Box
              key={role.id}
              sx={{
                bgcolor: 'background.neutral',
                borderRadius: 2,
                p: 3,
              }}
            >
              <Stack sx={{ flexDirection: 'row' }}>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}
                  >
                    نام نقش
                  </Typography>

                  <Typography variant="button">{role.name}</Typography>
                </Stack>

                <Fab
                  color="error"
                  size="small"
                  variant="soft"
                  sx={{ borderRadius: 1.5 }}
                  onClick={() => handleDelete(role.id)}
                >
                  <Iconify icon="heroicons:trash-20-solid" />
                </Fab>
              </Stack>

              <Stack sx={{ flexDirection: 'row', mt: 1 }}>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}
                  >
                    تاریخ ایجاد نقش
                  </Typography>

                  <Typography variant="body2">{role.createdAt}</Typography>
                </Stack>

                <Fab
                  color="info"
                  size="small"
                  variant="softExtended"
                  sx={{ [`&.${fabClasses.sizeSmall}`]: { borderRadius: 1.5, height: 40, mr: 1 } }}
                >
                  <Iconify icon="heroicons:pencil-square-20-solid" />
                  مدیریت و ویرایش
                </Fab>

                <Fab
                  color="warning"
                  size="small"
                  variant="soft"
                  sx={{ borderRadius: 1.5 }}
                  // onClick={details.onTrue}
                >
                  <Iconify icon="heroicons:eye-20-solid" />
                </Fab>
              </Stack>
            </Box>
          ))}
        </Box>

        <Pagination
          color="primary"
          count={8}
          sx={{
            mb: 3,
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
            [`& .${paginationClasses.ul} li button`]: { borderRadius: '12px' },
          }}
        />
      </Card>
    </DashboardContent>
  );
}
