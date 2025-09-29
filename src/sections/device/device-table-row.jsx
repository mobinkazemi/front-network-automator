import { Link } from "react-router";

import { Button } from "@/components/button";
import { TableCell, TableRow } from "@/components/table";
import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export function DeviceTableRow({ device }) {
  const onFetchAssets = async (deviceId) => {
    const response = await axiosInstance.get(
      `/devices/fetchAssets/${deviceId}`
    );

    console.log(response);
  };

  return (
    <TableRow>
      <TableCell>{device.id}</TableCell>
      <TableCell>{device.type}</TableCell>
      <TableCell>{device.model ?? "-"}</TableCell>
      <TableCell>{device.ip}</TableCell>
      <TableCell>{device.portCount ?? "-"}</TableCell>
      <TableCell>{device.hostname ?? "-"}</TableCell>
      <TableCell>{device.series ?? "-"}</TableCell>
      <TableCell className="space-x-3">
        {device.fetchedAsset && <Link to={`${device.id}`}>امکانات</Link>}

        {!device.fetchedAsset && (
          <Button onClick={() => onFetchAssets(device.id)}>fetch assets</Button>
        )}
      </TableCell>
    </TableRow>
  );
}
