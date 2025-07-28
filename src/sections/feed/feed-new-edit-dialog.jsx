import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import axiosInstance from 'src/utils/axios';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const UserQuickEditSchema = zod.object({
  type: zod.string().min(1),
  fileName: zod.string().min(1),
  item: zod.string().min(1),
  source: zod.string().min(1),
  // removeDate: zod.string().min(1),
});

// ----------------------------------------------------------------------

export function FeedNewEditDialog({ open, onClose }) {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    const fetchFileNames = async () => {
      const response = await axiosInstance.get('devices/firewall/feed/file-names');
      setFileNames(response.data.data);
    };

    fetchFileNames();
  }, []);

  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(UserQuickEditSchema),
    defaultValues: {},
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axiosInstance.post('devices/firewall/feed/create', data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle color="primary">ساخت تغذیه جدید</DialogTitle>

        <DialogContent>
          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)' }}
          >
            <Field.Select variant="filled" name="type" label="نوع عملکرد">
              <MenuItem value="block">مسدود شده</MenuItem>
              <MenuItem value="allowed">مجاز</MenuItem>
            </Field.Select>

            {/* <Field.Select variant="filled" name="fileName" label="لیست فایل">
              {fileNames.map((fileName, index) => (
                <MenuItem key={index} value={fileName}>
                  {fileName}
                </MenuItem>
              ))}
            </Field.Select> */}

            <Field.Text variant="filled" name="fileName" label="لیست فایل" />

            <Field.Text variant="filled" name="item" label="IP" />

            <Field.Text variant="filled" name="source" label="مرجع" />

            {/* <Field.Text variant="filled" name="removeDate" label="تاریخ حذف" /> */}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button fullWidth variant="outlined" onClick={onClose}>
            بستن
          </Button>

          <LoadingButton fullWidth type="submit" variant="contained" loading={isSubmitting}>
            تایید و ثبت
          </LoadingButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
