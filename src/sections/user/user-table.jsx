import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { tableCellClasses } from '@mui/material/TableCell';

import axiosInstance from 'src/utils/axios';

import { TableHeadCustom } from 'src/components/table';

import { UserTableRow } from './user-table-row';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'ردیف', align: 'center' },
  { id: 'size', label: 'نام کاربر', align: 'center' },
  { id: 'type', label: 'نقش کاربری', align: 'center' },
  { id: 'modifiedAt', label: 'شروع فعالیت', align: 'center' },
  {
    id: 'shared',
    label: 'وضعیت',
    align: 'center',
  },
  { id: '', label: 'عملیات', align: 'center' },
];

// ----------------------------------------------------------------------

export function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axiosInstance.get('user/admin/list');
      setUsers(response.data.data);
    };

    fetchUsers();
  }, []);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 960, borderCollapse: 'separate', borderSpacing: '0 16px' }}>
        <TableHeadCustom
          headLabel={TABLE_HEAD}
          sx={{
            [`& .${tableCellClasses.head}`]: {
              backgroundColor: 'common.white',
              py: 0,
            },
          }}
        />

        <TableBody>
          {users.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
