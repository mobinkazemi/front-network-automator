import { toast } from "sonner";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useBoolean } from "@/hooks/use-boolean";

import axiosInstance from "@/utils/axios";

import { RoleEditDialog } from "./edit/role-edit-dialog";
import { Link } from "react-router";

// ----------------------------------------------------------------------

const deleteApi = async (data) => {
  const response = await axiosInstance.delete("/role/delete", {
    data,
  });

  return response.data;
};

// ----------------------------------------------------------------------

export function RoleCard({ role }) {
  const edit = useBoolean();
  const queryClient = useQueryClient();

  const { mutate: deleteRole } = useMutation({
    mutationFn: deleteApi,
  });

  const onDelete = (roleId) => {
    deleteRole(
      { roleId },
      {
        onSuccess: () => {
          toast.success("نقش با موفقیت حذف شد");

          queryClient.invalidateQueries({ queryKey: ["roles"] });
        },
      },
    );
  };

  return (
    <>
      <li key={role.id} className="col-span-1 rounded-2xl bg-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-20 shrink-0 text-xs text-gray-500">نام نقش</span>

            <span className="text-sm font-bold text-gray-800">{role.name}</span>
          </div>

          <button
            className="rounded-xl bg-red-100 p-2 text-red-500 hover:bg-red-200"
            onClick={() => onDelete(role.id)}
          >
            <TrashIcon className="size-4" />
          </button>
        </div>

        <div className="mt-3 flex justify-between">
          <div className="flex items-center">
            <span className="w-20 shrink-0 text-xs text-gray-500">
              تاریخ ایجاد
            </span>

            <span className="text-sm text-gray-900">
              {new Date(role.createdAt).toLocaleDateString("fa-IR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex space-x-3">
            <button
              className="rounded-xl bg-blue-100 p-2 text-blue-500 hover:bg-blue-200"
              onClick={edit.onTrue}
            >
              <PencilSquareIcon className="size-4" />
            </button>

            <Link
              to={`${role.id}`}
              className="rounded-xl bg-orange-100 p-2 text-orange-500 hover:bg-orange-200"
            >
              <EyeIcon className="size-4" />
            </Link>
          </div>
        </div>
      </li>

      <RoleEditDialog open={edit.value} onClose={edit.onFalse} role={role} />
    </>
  );
}
