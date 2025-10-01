import { useState } from "react";
import { Link } from "react-router";
import {
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
  ArrowPathIcon,
} from "@heroicons/react/16/solid";

import { Loading } from "@/components/loading";

import { useLoadAssetsQuery } from "@/actions/device";

// ----------------------------------------------------------------------

export function DeviceTableRow({ device }) {
  const [deviceId, setDeviceId] = useState();

  const { assetsFetching } = useLoadAssetsQuery(deviceId);

  return (
    <>
      <tr>
        <td className="rounded-r-2xl bg-gray-100 py-4 pr-4 pl-3 text-center text-lg font-bold whitespace-nowrap text-gray-500">
          {device.id}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {device.type}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {device.model ?? "-"}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {device.ip}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {device.portCount ?? "-"}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {device.hostname ?? "-"}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {device.series ?? "-"}
        </td>

        <td className="rounded-l-2xl bg-gray-100 py-4 pr-3 pl-4 whitespace-nowrap">
          <div className="flex justify-center gap-x-1.5">
            <button className="rounded-xl bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
              <PencilSquareIcon aria-hidden="true" className="size-4" />
            </button>

            <button className="rounded-xl bg-red-100 p-2 text-red-600 hover:bg-red-200">
              <TrashIcon aria-hidden="true" className="size-4" />
            </button>

            {!device.fetchedAsset && (
              <button
                disabled={assetsFetching}
                className="rounded-xl bg-gray-200 p-2 text-gray-600 not-disabled:hover:bg-gray-300 disabled:opacity-50"
                onClick={() => setDeviceId(device.id)}
              >
                {assetsFetching && <Loading />}

                {!assetsFetching && (
                  <ArrowPathIcon aria-hidden="true" className="size-4" />
                )}
              </button>
            )}

            {device.fetchedAsset && (
              <Link
                to={`${device.id}`}
                className="rounded-xl bg-orange-100 p-2 text-orange-600 hover:bg-orange-200"
              >
                <EyeIcon aria-hidden="true" className="size-4" />
              </Link>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}
