import { TableCell, TableRow } from "@/components/table";

// ----------------------------------------------------------------------

export const UserTableRow = ({ user }) => {
  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.firstName}</TableCell>
      <TableCell>{user.lastName}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role.name}</TableCell>
      <TableCell>{user.createdAt}</TableCell>
    </TableRow>
  );
};
