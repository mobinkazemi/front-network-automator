import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Fab, { fabClasses } from '@mui/material/Fab';
import ListItemText from '@mui/material/ListItemText';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { useBoolean } from 'src/hooks/use-boolean';

import axiosInstance from 'src/utils/axios';

import { Label } from 'src/components/label';
import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

import { UserDetailsDialog } from './user-details-dialog';

// ----------------------------------------------------------------------

export function UserTableRow({ user }) {
  const details = useBoolean();

  const handleDelete = async (userId) => {
    try {
      await axiosInstance.delete('user/admin/delete', { data: { userId } });

      toast.success('کاربر با موفقیت حذف شد');
    } catch (error) {
      toast.error(error.response.data.detail);
    }
  };

  return (
    <>
      <TableRow
        sx={{
          borderRadius: 2,
          backgroundColor: 'background.neutral',
          [`& .${tableCellClasses.root}`]: {
            '&:first-of-type': { borderRadius: 50, borderBottomRightRadius: 50 },
          },
        }}
      >
        <TableCell align="center">{user.id}</TableCell>

        <TableCell>
          <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
            <Avatar
              sx={{
                width: 36,
                height: 36,
                border: (theme) => `solid 2px ${theme.vars.palette.primary.main}`,
              }}
            />

            <ListItemText
              primary={`${user.firstName} ${user.lastName}`}
              secondary={user.email}
              primaryTypographyProps={{ typography: 'button' }}
              secondaryTypographyProps={{ typography: 'caption', color: 'text.disabled' }}
              sx={{ flex: 'none' }}
            />
          </Stack>
        </TableCell>

        <TableCell align="center">کارشناس شبکه کامپیوتر</TableCell>

        <TableCell align="center">{user.createdAt}</TableCell>

        <TableCell align="center">
          <Label variant="soft" color="success">
            {user.active ? 'فعال' : 'غیرفعال'}
          </Label>
        </TableCell>

        <TableCell>
          <Stack columnGap={1} direction="row" justifyContent="center">
            <Fab
              color="warning"
              size="small"
              variant="soft"
              sx={{ borderRadius: 1.5 }}
              onClick={details.onTrue}
            >
              <Iconify icon="heroicons:eye-20-solid" />
            </Fab>

            <Fab
              color="info"
              size="small"
              variant="softExtended"
              sx={{ [`&.${fabClasses.sizeSmall}`]: { borderRadius: 1.5, height: 40 } }}
            >
              <Iconify icon="heroicons:pencil-square-20-solid" />
              ویرایش کاربر
            </Fab>

            <Fab
              color="error"
              size="small"
              variant="soft"
              sx={{ borderRadius: 1.5 }}
              onClick={() => handleDelete(user.id)}
            >
              <Iconify icon="heroicons:trash-20-solid" />
            </Fab>
          </Stack>
        </TableCell>
      </TableRow>

      <UserDetailsDialog item={user} open={details.value} onClose={details.onFalse} />
    </>
  );
}
