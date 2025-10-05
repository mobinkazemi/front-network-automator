import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const get = async (id) => {
  const response = await axiosInstance.get(
    `/rolePermission/roleCategoryPermissions/${id}`,
  );

  return response.data;
};

// ----------------------------------------------------------------------

export function RoleDetailsView() {
  const { id } = useParams();

  const { data: permissions, isPending: permissionsLoading } = useQuery({
    queryKey: ["permissions"],
    queryFn: () => get(id),
  });

  console.log(permissions);

  if (permissionsLoading) return "Loading...";

  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="px-6 py-5">
          <div className="-mt-2 -mr-4 flex items-center justify-between">
            <div className="mt-2 mr-4">
              <div className="flex gap-x-1.5">
                <h3 className="text-base font-semibold text-orange-500">
                  نمایش دسترسی های نقش
                </h3>
                <span className="font-semibold text-gray-800">
                  {/* {permissions.data[0].name} */}
                </span>
              </div>
            </div>

            <div className="mt-2 mr-4 shrink-0">
              <Link
                to="/dashboard/role"
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

        <div className="space-y-10 p-6">
          {permissions.data.map((p) => (
            <div key={p.id}>
              <div className="flex items-center gap-x-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.5"
                    y="1.5"
                    width="7"
                    height="7"
                    rx="3.5"
                    stroke="#F58220"
                    stroke-width="3"
                  />
                </svg>

                <span className="font-bold text-orange-500">{p.name}</span>
              </div>

              <ul
                role="list"
                className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-2"
              >
                {p.permissions.map((item) => (
                  <li
                    key={item.id}
                    className="col-span-1 rounded-2xl bg-gray-100 p-4 text-sm font-bold"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
