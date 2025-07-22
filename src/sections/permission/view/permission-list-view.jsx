import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Fab, { fabClasses } from '@mui/material/Fab';
import CardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import axiosInstance from 'src/utils/axios';

import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function PermissionListView() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://172.17.17.70:8000/permissionCategory/list', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsIm11c3RDaGFuZ2VQYXNzd29yZCI6ZmFsc2UsInJvbGVJZCI6MSwiZXhwIjoxNzUzMTk3OTEyfQ.1p22mzJ2FxKSdvpLIkDZ1bHLt24Dj_lltHqBuE5l26o',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data.data));
  }, []);

  const handleDelete = async (roleId) => {
    try {
      await axiosInstance.delete('role/delete', {
        data: { roleId },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsIm11c3RDaGFuZ2VQYXNzd29yZCI6ZmFsc2UsInJvbGVJZCI6MSwiZXhwIjoxNzUzMTk3OTEyfQ.1p22mzJ2FxKSdvpLIkDZ1bHLt24Dj_lltHqBuE5l26o',
        },
      });

      toast.success('نقش با موفقیت حذف شد');
    } catch (error) {
      toast.error(error.detail);
    }
  };

  return (
    <DashboardContent>
      <Card>
        <CardHeader
          title="لیست گروه ها و دسترسی ها"
          titleTypographyProps={{ color: 'primary' }}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.user.new}
              variant="contained"
              startIcon={<Iconify icon="heroicons:plus-small-solid" />}
            >
              گروه جدید
            </Button>
          }
          sx={{ mb: 3, [`& .${cardHeaderClasses.action}`]: { m: 0 } }}
        />

        <Divider sx={{ mx: 3 }} />

        <Box
          gap={2}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
          sx={{ p: 3 }}
        >
          {categories.map((category) => (
            <Box
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
                    نام گروه
                  </Typography>

                  <Typography variant="button">{category.name}</Typography>
                </Stack>

                {!category.isDefault && (
                  <Fab
                    color="error"
                    size="small"
                    variant="soft"
                    sx={{ borderRadius: 1.5 }}
                    // onClick={details.onTrue}
                  >
                    <Iconify icon="heroicons:trash-20-solid" />
                  </Fab>
                )}
              </Stack>

              <Stack sx={{ flexDirection: 'row', mt: 1 }}>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}
                  >
                    تاریخ ایجاد گروه
                  </Typography>

                  <Typography variant="body2">{category.createdAt}</Typography>
                </Stack>

                <Fab
                  color="info"
                  size="small"
                  variant="softExtended"
                  sx={{ [`&.${fabClasses.sizeSmall}`]: { borderRadius: 1.5, height: 40, mr: 1 } }}
                >
                  <Iconify icon="heroicons:pencil-square-20-solid" />
                  مدیریت گروه
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
      </Card>
    </DashboardContent>
  );
}
