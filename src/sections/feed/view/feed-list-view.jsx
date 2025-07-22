import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';

import { useBoolean } from 'src/hooks/use-boolean';

import axiosInstance from 'src/utils/axios';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import { FeedCard } from '../feed-card';
import { FeedNewEditDialog } from '../feed-new-edit-dialog';

// ----------------------------------------------------------------------

export function FeedListView() {
  const [feeds, setFeeds] = useState([]);

  const create = useBoolean();

  useEffect(() => {
    const fetchFeeds = async () => {
      const response = await axiosInstance.get('devices/firewall/feed/list');
      setFeeds(response.data.data);
    };

    fetchFeeds();
  }, []);

  return (
    <DashboardContent>
      <Card>
        <CardHeader
          title="لیست تغذیه و تأمین کنندگان"
          titleTypographyProps={{ color: 'primary' }}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon="heroicons:plus-small-solid" />}
              onClick={create.onTrue}
            >
              تغذیه جدید
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
          {feeds.map((feed) => (
            <FeedCard key={feed.id} feed={feed} />
          ))}
        </Box>
      </Card>

      <FeedNewEditDialog open={create.value} onClose={create.onFalse} />
    </DashboardContent>
  );
}
