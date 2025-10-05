import z from "zod";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { Divider } from "@/components/divider";
import { Field, Label, ErrorMessage } from "@/components/fieldset";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";

import {
  useCreatePermissionCategoryMutation,
  usePermissionsQuery,
  useAddPermissionToCategoryMutation,
  usePermissionsOfCategoryQuery,
} from "@/actions/permission";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utils/axios";
import { toast } from "sonner";

// ----------------------------------------------------------------------

const get = async () => {
  const response = await axiosInstance.get(
    "/permissionCategory/list-with-permissions",
  );

  return response.data;
};

const create = async (data) => {
  const response = await axiosInstance.post("/permissionCategory/create", data);

  return response.data;
};

const add = async (data) => {
  const response = await axiosInstance.post("/permission/addToCategory", data);

  return response.data;
};

// ----------------------------------------------------------------------

const newPermissionCategorySchema = z.object({
  name: z.string().nonempty("نام گروه را وارد کنید"),
});

// ----------------------------------------------------------------------

export function PermissionCategoryNewDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">گروه جدید</DialogTitle>

      <CategoryAccordion onClose={onClose} />
    </Dialog>
  );
}

// ----------------------------------------------------------------------

function CategoryAccordion({ onClose }) {
  const queryClient = useQueryClient();

  const [selectedSubIds, setSelectedSubIds] = useState(new Set());
  const [search, setSearch] = useState("");
  const [openCategories, setOpenCategories] = useState(new Set());

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newPermissionCategorySchema),
  });

  const { data, isPending } = useQuery({
    queryKey: ["list-with-permissions"],
    queryFn: get,
  });

  const toggleSubCategory = (id) => {
    setSelectedSubIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const toggleCategory = (subCategories) => {
    if (!subCategories || subCategories.length === 0) return;

    setSelectedSubIds((prev) => {
      const newSet = new Set(prev);

      const allSelected = subCategories.every((s) => newSet.has(s.id));
      if (allSelected) {
        subCategories.forEach((s) => newSet.delete(s.id));
      } else {
        subCategories.forEach((s) => newSet.add(s.id));
      }

      return newSet;
    });
  };

  const filterSubCategories = (subs) => {
    const list = subs ?? [];
    if (!search.trim()) return list;
    return list.filter((s) =>
      s.text.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const { mutate: createPermissionCategory } = useMutation({
    mutationFn: create,
  });

  const { mutate: addPermissionToCategory } = useMutation({
    mutationFn: add,
  });

  const onSubmit = handleSubmit((name) => {
    createPermissionCategory(name, {
      onSuccess: ({ data }) => {
        addPermissionToCategory({
          categoryId: data.id,
          permissionIds: [...selectedSubIds],
        });

        queryClient.invalidateQueries({ queryKey: ["permission-categories"] });

        reset();
        onClose();
      },
      onError: (error) => {
        toast.error(error.response.data.detail);
      },
    });
  });

  useEffect(() => {
    if (search.trim()) {
      const matched = data.data
        .filter((cat) => filterSubCategories(cat.permissions).length > 0)
        .map((cat) => cat.id);

      setOpenCategories(new Set(matched));
    } else {
      setOpenCategories(new Set());
    }
  }, [search]);

  if (isPending) return "Loading...";

  return (
    <form onSubmit={onSubmit}>
      <DialogBody>
        <div className="border-b border-gray-200 pb-4">
          <Field>
            <Label>نام گروه</Label>
            <Input invalid={!!errors.name} {...register("name")} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </Field>
        </div>

        <div className="mt-4 space-y-4">
          <Input
            placeholder="نام دسترسی را جستجو کنید..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="max-h-96 space-y-2 overflow-y-auto">
            {data.data.map((cat) => {
              const filteredSubs = filterSubCategories(cat.permissions);

              if (search.trim() && filteredSubs.length === 0) return null;

              const allSelected =
                filteredSubs.length > 0 &&
                filteredSubs.every((s) => selectedSubIds.has(s.id));

              const someSelected =
                filteredSubs.length > 0 &&
                !allSelected &&
                filteredSubs.some((s) => selectedSubIds.has(s.id));

              const disclosureKey = `${cat.id}-${openCategories.has(cat.id) ? "open" : "closed"}`;

              return (
                <Disclosure
                  key={disclosureKey}
                  defaultOpen={openCategories.has(cat.id)}
                >
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-right text-sm font-medium text-gray-800 hover:bg-gray-200">
                        <div className="flex items-center gap-2">
                          {filteredSubs.length > 0 ? (
                            <input
                              type="checkbox"
                              checked={allSelected}
                              ref={(el) => {
                                if (el) el.indeterminate = someSelected;
                              }}
                              onChange={(e) => toggleCategory(filteredSubs)}
                              onClick={(e) => e.stopPropagation()}
                            />
                          ) : null}

                          {cat.name}
                        </div>

                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-gray-500`}
                        />
                      </DisclosureButton>

                      <DisclosurePanel className="space-y-1 px-6 pt-2 pb-4 text-sm text-gray-600">
                        {filteredSubs.length > 0 ? (
                          filteredSubs.map((sub) => (
                            <label
                              key={sub.id}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                checked={selectedSubIds.has(sub.id)}
                                onChange={() => toggleSubCategory(sub.id)}
                              />

                              {sub.text}
                            </label>
                          ))
                        ) : (
                          <span className="text-gray-400">بدون زیردسته</span>
                        )}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        </div>
      </DialogBody>

      <DialogActions>
        <Button type="submit" color="orange">
          ثبت
        </Button>
      </DialogActions>
    </form>
  );
}
