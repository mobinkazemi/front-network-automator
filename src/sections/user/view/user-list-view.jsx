import { useUsersQuery } from "@/actions/user";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

import { UserTableRow } from "../user-table-row";

// ----------------------------------------------------------------------

export const UserListView = () => {
  const { users, usersLoading } = useUsersQuery();

  if (usersLoading) return "Loading...";

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>ID</TableHeader>
          <TableHeader>نام</TableHeader>
          <TableHeader>نام خانوادگی</TableHeader>
          <TableHeader>ایمیل</TableHeader>
          <TableHeader>نقش</TableHeader>
          <TableHeader>تاریخ ثبت نام</TableHeader>
          <TableHeader>وضعیت</TableHeader>
          <TableHeader>عملیات</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.data.map((user) => (
          <UserTableRow key={user.id} user={user} />
        ))}
      </TableBody>
    </Table>
  );
};
