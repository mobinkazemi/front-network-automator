import { useDevicesQuery } from "@/actions/device";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

import { DeviceTableRow } from "../device-table-row";

// ----------------------------------------------------------------------

export function DeviceListView() {
  const { devices, devicesLoading } = useDevicesQuery();

  if (devicesLoading) return "Loading...";

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>نوع</TableHeader>
            <TableHeader>مدل</TableHeader>
            <TableHeader>ip</TableHeader>
            <TableHeader>تعداد پورت</TableHeader>
            <TableHeader>hostname</TableHeader>
            <TableHeader>سری</TableHeader>
            <TableHeader>عملیات</TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {devices.data.map((device) => (
            <DeviceTableRow key={device.id} device={device} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
