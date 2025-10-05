import { Dialog, DialogBody, DialogTitle } from "@/components/dialog";

// ----------------------------------------------------------------------

export function UserDetailsDialog({ open, onClose, user }) {
  return (
    <Dialog open={open} onClose={onClose} size="xl">
      <DialogTitle className="text-orange-500!">جزئیات کاربر</DialogTitle>

      <DialogBody>
        <div className="flex items-end justify-between border-b border-gray-200 pb-4">
          <div className="flex items-end gap-x-3">
            <span className="inline-block size-16 shrink-0 overflow-hidden rounded-full bg-gray-100">
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

          <div className="flex flex-col">
            <span className="text-sm text-gray-500">نقش کاربر</span>
            <span className="mt-1 text-sm font-bold text-gray-800">
              {user.role.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-b border-gray-200 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">نام کاربری</span>
            <span className="text-sm font-bold text-gray-800">
              {user.username ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">جنسیت</span>
            <span className="text-sm font-bold text-gray-800">
              {user.gender ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">کدملی</span>
            <span className="text-sm font-bold text-gray-800">
              {user.nationalId ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">تحصیلات</span>
            <span className="text-sm font-bold text-gray-800">
              {user.education ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">شماره موبایل</span>
            <span className="text-sm font-bold text-gray-800">
              {user.cellphone ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">تاریخ تولد</span>
            <span className="text-sm font-bold text-gray-800">
              {user.birthday ?? "-"}
            </span>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              تعداد سابقه ذخیره رمزعبور
            </span>
            <span className="text-sm font-bold text-gray-800">
              {user.passwordHistoryCount}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              تعداد روز تغییر رمزعبور
            </span>
            <span className="text-sm font-bold text-gray-800">
              {user.expirePasswordDays ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              تعداد روز مهلت اضافه پس از انقضای رمزعبور
            </span>
            <span className="text-sm font-bold text-gray-800">
              {user.passwordAdvantageDays ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              تاریخ غیرفعال شدن حساب کاربری
            </span>
            <span className="text-sm font-bold text-gray-800">
              {user.deactivedAt ?? "-"}
            </span>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
}
