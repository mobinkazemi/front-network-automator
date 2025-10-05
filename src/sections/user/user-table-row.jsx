import { toast } from "sonner";
import { Link } from "react-router";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import { useBoolean } from "@/hooks/use-boolean";

import { Badge } from "@/components/badge";

import { UserDetailsDialog } from "./user-details-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const deleteApi = async (data) => {
  const response = await axiosInstance.delete("/user/admin/delete", {
    data,
  });

  return response.data;
};

// ----------------------------------------------------------------------

export function UserTableRow({ user }) {
  const details = useBoolean();

  const queryClient = useQueryClient();

  const { mutate: deleteUser } = useMutation({
    mutationFn: deleteApi,
  });

  const onDelete = (userId) => {
    deleteUser(
      { userId },
      {
        onSuccess: () => {
          toast.success("کاربر با موفقیت حذف شد");

          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
      },
    );
  };

  return (
    <>
      <tr>
        <td className="rounded-r-2xl bg-gray-100 py-4 pr-4 pl-3 text-center text-lg font-bold whitespace-nowrap text-gray-500">
          {user.id}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-sm whitespace-nowrap text-gray-800">
          <div className="flex items-center justify-center gap-x-3">
            <span className="inline-block size-11 shrink-0 overflow-hidden rounded-full border-2 border-orange-500 bg-gray-100">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="size-full text-gray-300"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>

            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800">
                {`${user.firstName} ${user.lastName}`}
              </span>

              <span className="mt-1 text-xs text-gray-500">{user.email}</span>
            </div>
          </div>
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {user.role.name}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {new Date(user.createdAt).toLocaleDateString("fa-IR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </td>

        <td className="bg-gray-100 px-3 py-4 text-center text-sm whitespace-nowrap text-gray-800">
          {user.active ? (
            <Badge color="lime" className="mr-auto">
              فعال
            </Badge>
          ) : (
            <Badge color="rose" className="mr-auto">
              غیرفعال
            </Badge>
          )}
        </td>

        <td className="rounded-l-2xl bg-gray-100 py-4 pr-3 pl-4 whitespace-nowrap">
          <div className="flex justify-center gap-x-1.5">
            <button className="rounded-xl bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
              <PencilSquareIcon aria-hidden="true" className="size-4" />
            </button>

            <button
              className="rounded-xl bg-red-100 p-2 text-red-600 hover:bg-red-200"
              onClick={() => onDelete(user.id)}
            >
              <TrashIcon aria-hidden="true" className="size-4" />
            </button>

            <button
              className="rounded-xl bg-orange-100 p-2 text-orange-600 hover:bg-orange-200"
              onClick={details.onTrue}
            >
              <EyeIcon aria-hidden="true" className="size-4" />
            </button>
          </div>
        </td>
      </tr>

      <UserDetailsDialog
        open={details.value}
        onClose={details.onFalse}
        user={user}
      />
    </>
  );
}
