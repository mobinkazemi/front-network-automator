import { PlusIcon } from "@heroicons/react/16/solid";

import { useBoolean } from "@/hooks/use-boolean";

import { usePermissionCategoriesQuery } from "@/actions/permission";

import { PermissionCategoryCard } from "../permission-category-card";
import { PermissionCategoryNewForm } from "../permission-category-new-form";

// ----------------------------------------------------------------------

export function PermissionListView() {
  const newPermissionCategory = useBoolean();

  const { permissionCategories, permissionCategoriesLoading } =
    usePermissionCategoriesQuery();

  if (permissionCategoriesLoading) return "Loading...";

  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="px-6 py-5">
          <div className="-mt-2 -mr-4 flex items-center justify-between">
            <div className="mt-2 mr-4">
              <h3 className="text-base font-semibold text-orange-500">
                لیست گروه ها و دسترسی ها
              </h3>
            </div>

            <div className="mt-2 mr-4 shrink-0">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-400"
                onClick={newPermissionCategory.onTrue}
              >
                <PlusIcon aria-hidden="true" className="-mr-0.5 size-4" />
                گروه جدید
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {permissionCategories.data.map((permissionCategory) => (
              <PermissionCategoryCard
                key={permissionCategory.id}
                permissionCategory={permissionCategory}
              />
            ))}
          </ul>
        </div>
      </div>

      <PermissionCategoryNewForm
        open={newPermissionCategory.value}
        onClose={newPermissionCategory.onFalse}
      />
    </>
  );
}
