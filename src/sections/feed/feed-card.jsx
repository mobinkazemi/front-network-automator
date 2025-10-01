import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import { useBoolean } from "@/hooks/use-boolean";

import { Badge } from "@/components/badge";
import { FeedDetailsDialog } from "./feed-details-dialog";

// ----------------------------------------------------------------------

export function FeedCard({ feed }) {
  const details = useBoolean();

  return (
    <>
      <li key={feed.id} className="col-span-1 rounded-2xl bg-gray-100 p-6">
        <div className="flex items-center">
          <span className="text-xs text-gray-500">آی پی</span>

          <span className="mr-3 truncate pl-3 text-sm font-bold text-gray-900">
            {feed.item}
          </span>

          {feed.active ? (
            <Badge color="lime" className="mr-auto">
              فعال
            </Badge>
          ) : (
            <Badge color="rose" className="mr-auto">
              غیرفعال
            </Badge>
          )}
        </div>

        <div className="mt-3 flex gap-3">
          <div className="flex grow justify-between rounded-xl bg-white px-3 py-1">
            <div>
              <span className="text-xs text-gray-500">اسم فایل:</span>
              <span className="mr-3 text-sm font-bold text-orange-500">
                {feed.fileName}
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-500">نوع عملکرد:</span>
              <span className="mr-3 text-sm font-bold text-gray-900">
                {feed.type === "block" ? "مسدود" : "مجاز"}
              </span>
            </div>
          </div>

          <button className="rounded-xl bg-red-100 p-2 text-red-500 hover:bg-red-200">
            <TrashIcon className="size-4" />
          </button>

          <button className="rounded-xl bg-blue-100 p-2 text-blue-500 hover:bg-blue-200">
            <PencilSquareIcon className="size-4" />
          </button>

          <button
            className="rounded-xl bg-orange-100 p-2 text-orange-500 hover:bg-orange-200"
            onClick={details.onTrue}
          >
            <EyeIcon className="size-4" />
          </button>
        </div>
      </li>

      <FeedDetailsDialog
        feed={feed}
        open={details.value}
        onClose={details.onFalse}
      />
    </>
  );
}
