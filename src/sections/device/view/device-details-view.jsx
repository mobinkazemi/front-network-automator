import { Link } from "react-router";
import ReactJsonView from "@microlink/react-json-view";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import { useBoolean } from "@/hooks/use-boolean";

import { useDeviceQuery, useAssetsQuery } from "@/actions/device";

import { DeviceHardeningDialog } from "../device-hardening-dialog";

// ----------------------------------------------------------------------

export function DeviceDetailsView() {
  const hardening = useBoolean();

  const { device, deviceLoading } = useDeviceQuery();
  const { assets, assetsLoading } = useAssetsQuery();

  if (assetsLoading || deviceLoading) return "Loading...";

  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="px-6 py-5">
          <div className="-mt-2 -mr-4 flex items-center justify-between">
            <div className="mt-2 mr-4">
              <div className="flex gap-x-1.5">
                <h3 className="text-base font-semibold text-orange-500">
                  دستگاه
                </h3>
                <span className="font-semibold text-gray-800">{`${device.type} ${device.subtype}`}</span>
              </div>
            </div>

            <div className="mt-2 mr-4 shrink-0">
              <Link
                to="/dashboard/device"
                className="inline-flex items-center gap-x-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                <ChevronRightIcon
                  aria-hidden="true"
                  className="-mr-0.5 size-4"
                />
                بازگشت به لیست
              </Link>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between rounded-2xl bg-gray-100 p-6">
            <span className="font-bold text-gray-800">
              مدیریت مقاوم سازی این دستگاه
            </span>

            <button
              type="button"
              className="rounded-xl bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500"
              onClick={hardening.onTrue}
            >
              مقاوم سازی دستگاه
            </button>
          </div>

          <div className="mt-4 rounded-2xl bg-gray-100 p-6">
            <ReactJsonView
              src={assets.data[0]}
              iconStyle="circle"
              style={{ direction: "ltr" }}
              collapsed={1}
              name={false}
              displayDataTypes={false}
              showComma={false}
              enableClipboard={false}
            />
          </div>
        </div>
      </div>

      <DeviceHardeningDialog
        open={hardening.value}
        onClose={hardening.onFalse}
      />
    </>
  );
}
