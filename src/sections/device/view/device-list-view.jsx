import { PlusIcon } from "@heroicons/react/16/solid";

import { useDevicesQuery } from "@/actions/device";

import { DeviceTableRow } from "../device-table-row";

// ----------------------------------------------------------------------

export function DeviceListView() {
  const { devices, devicesLoading } = useDevicesQuery();

  if (devicesLoading) return "Loading...";

  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="px-6 py-5">
          <div className="-mt-2 -mr-4 flex items-center justify-between">
            <div className="mt-2 mr-4">
              <h3 className="text-base font-semibold text-orange-500">
                لیست دستگاه ها
              </h3>
            </div>

            <div className="mt-2 mr-4 shrink-0">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-400"
              >
                <PlusIcon aria-hidden="true" className="-mr-0.5 size-4" />
                دستگاه جدید
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mt-8 flow-root">
            <div className="-mx-8 -my-2 overflow-x-auto">
              <div className="inline-block min-w-full px-8 py-2 align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pr-4 pl-3 text-center text-sm font-normal text-gray-500"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-normal text-gray-500"
                      >
                        نوع دستگاه
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-normal text-gray-500"
                      >
                        مدل
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-normal text-gray-500"
                      >
                        IP
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-normal text-gray-500"
                      >
                        تعداد پورت
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-normal text-gray-500"
                      >
                        hostname
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-normal text-gray-500"
                      >
                        سری دستگاه
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pr-3 pl-4 text-center text-sm font-normal text-gray-500"
                      >
                        عملیات
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {devices.data.map((device) => (
                      <DeviceTableRow key={device.id} device={device} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
