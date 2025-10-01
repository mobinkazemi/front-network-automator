import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

// ----------------------------------------------------------------------

export function FeedDetailsDialog({ open, onClose, feed }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">جزئیات تغذیه</DialogTitle>

      <DialogBody>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">وضعیت</span>

            {feed.active ? (
              <Badge color="lime">فعال</Badge>
            ) : (
              <Badge color="rose">غیرفعال</Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">نوع عملکرد</span>

            <span className="text-sm font-bold text-gray-800">
              {feed.type === "block" ? "مسدود" : "مجاز"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">نام فایل</span>

            <span className="text-sm font-bold text-gray-800">
              {feed.fileName}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">IP</span>

            <span className="text-sm font-bold text-gray-800">{feed.item}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">مرجع</span>

            <span className="text-sm font-bold text-gray-800">
              {feed.source}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">تاریخ حذف</span>

            <span className="text-sm font-bold text-gray-800">
              {feed.removeDate ?? '-'}
            </span>
          </div>
        </div>
      </DialogBody>

      <DialogActions>
        <Button className="w-full!" onClick={onClose}>
          بستن
        </Button>
      </DialogActions>
    </Dialog>
  );
}
