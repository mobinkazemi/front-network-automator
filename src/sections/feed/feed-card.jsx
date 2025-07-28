import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';

import axiosInstance from 'src/utils/axios';

import { CONFIG } from 'src/config-global';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';
import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

import { FeedDetailsDialog } from './feed-details-dialog';

// ----------------------------------------------------------------------

export function FeedCard({ feed }) {
  const details = useBoolean();

  const handleDelete = async (feedId) => {
    console.log(feedId)
    try {
      await axiosInstance.delete(`/devices/firewall/feed/delete/${feedId}`);

      toast.success('تغذیه با موفقیت حذف شد');
    } catch (error) {
      toast.error(error.response.data.detail);
    }
  };

  return (
    <>
      <Box
        key={feed.id}
        sx={{
          bgcolor: 'background.neutral',
          borderRadius: 2,
          p: 3,
        }}
      >
        <Stack sx={{ flexDirection: 'row' }}>
          <Stack sx={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', flexShrink: 0 }}>
              IP
            </Typography>

            <Typography variant="button" sx={{ ml: 1 }}>
              {feed.item}
            </Typography>

            <Box
              sx={{
                height: '14px',
                width: '1px',
                display: 'block',
                bgcolor: '#E1E1E1',
                ml: 1,
              }}
            />

            <Image src={`${CONFIG.site.basePath}/assets/flag.svg`} sx={{ ml: 1, pb: 1 }} />

            <Typography variant="button" sx={{ ml: 1 }}>
              {feed.geoLocation}
            </Typography>
          </Stack>

          <Label variant="soft" color="success">
            {feed.active ? 'فعال' : 'غیرفعال'}
          </Label>
        </Stack>

        <Stack sx={{ flexDirection: 'row', mt: 1, columnGap: 1 }}>
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              flexGrow: 1,
              bgcolor: 'common.white',
              p: 1,
              borderRadius: 1.5,
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              اسم فایل:
            </Typography>

            <Typography variant="button" color="primary" sx={{ ml: 1 }}>
              {feed.fileName}
            </Typography>

            <Typography variant="caption" sx={{ color: 'text.secondary', ml: 'auto' }}>
              نوع عملکرد:
            </Typography>

            <Typography variant="button" sx={{ ml: 1 }}>
              {feed.type === 'block' ? 'مسدود شده' : 'مجاز'}
            </Typography>
          </Stack>

          <Fab
            color="info"
            size="small"
            variant="soft"
            sx={{ borderRadius: 1.5 }}
            onClick={details.onTrue}
          >
            <Iconify icon="heroicons:eye-20-solid" />
          </Fab>

          <Fab
            color="error"
            size="small"
            variant="soft"
            sx={{ borderRadius: 1.5 }}
            onClick={() => handleDelete(feed.id)}
          >
            <Iconify icon="heroicons:trash-20-solid" />
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

      <FeedDetailsDialog feed={feed} open={details.value} onClose={details.onFalse} />
    </>
  );
}
