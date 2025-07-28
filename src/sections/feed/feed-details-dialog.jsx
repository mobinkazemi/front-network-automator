import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// ----------------------------------------------------------------------

export function FeedDetailsDialog({ feed, open, onClose }) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle color="primary">نمایش تغذیه</DialogTitle>

      <DialogContent>
        <Stack rowGap={1.5}>
          <Stack direction="row" alignItems="center">
            <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
              وضعیت
            </Typography>

            <Typography variant="button">{feed.active ? 'فعال' : 'غیرفعال'}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
              نوع عملکرد
            </Typography>

            <Typography variant="button">{feed.type === 'block' ? 'مسدود شده' : 'مجاز'}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
              نام فایل
            </Typography>

            <Typography variant="button">{feed.fileName}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
              IP
            </Typography>

            <Typography variant="button">{feed.item}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
              مرجع
            </Typography>

            <Typography variant="button">{feed.source}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography component="span" variant="body2" color="text.secondary" flexGrow={1}>
              تاریخ حذف
            </Typography>

            <Typography variant="button">{feed.removeDate ?? '-'}</Typography>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button fullWidth variant="contained" onClick={onClose}>
          بستن
        </Button>
      </DialogActions>
    </Dialog>
  );
}
