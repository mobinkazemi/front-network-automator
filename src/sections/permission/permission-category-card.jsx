import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/utils/axios";
import { toast } from "sonner";
import { Link } from "react-router";

// ----------------------------------------------------------------------

const deleteApi = async (data) => {
  const response = await axiosInstance.delete("/permissionCategory/delete", {
    data,
  });

  return response.data;
};

// ----------------------------------------------------------------------

export function PermissionCategoryCard({ permissionCategory }) {
  const queryClient = useQueryClient();

  const { mutate: deleteRole } = useMutation({
    mutationFn: deleteApi,
  });

  const onDelete = (permissionCategoryId) => {
    deleteRole(
      { id: permissionCategoryId },
      {
        onSuccess: () => {
          toast.success("گروه با موفقیت حذف شد");

          queryClient.invalidateQueries({
            queryKey: ["permission-categories"],
          });
        },
      },
    );
  };

  return (
    <>
      <li
        key={permissionCategory.id}
        className="col-span-1 rounded-2xl bg-gray-100 p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-20 shrink-0 text-xs text-gray-500">
              نام گروه
            </span>

            <span className="text-sm font-bold text-gray-800">
              {permissionCategory.name}
            </span>
          </div>

          {!permissionCategory.isDefault && (
            <button
              className="rounded-xl bg-red-100 p-2 text-red-500 hover:bg-red-200"
              onClick={() => onDelete(permissionCategory.id)}
            >
              <TrashIcon className="size-4" />
            </button>
          )}
        </div>

        <div className="mt-3 flex justify-between">
          <div className="flex items-center">
            <span className="w-20 shrink-0 text-xs text-gray-500">
              تاریخ ایجاد
            </span>

            <span className="text-sm text-gray-500">
              {new Date(permissionCategory.createdAt).toLocaleDateString(
                "fa-IR",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )}
            </span>
          </div>

          <div className="flex space-x-3">
            <button className="rounded-xl bg-blue-100 p-2 text-blue-500 hover:bg-blue-200">
              <PencilSquareIcon className="size-4" />
            </button>

            <Link
              to={`${permissionCategory.id}`}
              className="rounded-xl bg-orange-100 p-2 text-orange-500 hover:bg-orange-200"
            >
              <EyeIcon className="size-4" />
            </Link>
          </div>
        </div>
      </li>
    </>
  );
}
