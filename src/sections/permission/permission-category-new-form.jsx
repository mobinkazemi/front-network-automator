import z from "zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

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

// ----------------------------------------------------------------------

const tabs = [
  { name: "اطلاعات", disabled: false },
  { name: "دسترسی ها", disabled: false },
];

const newPermissionCategorySchema = z.object({
  name: z.string().min(1, "نام گروه را وارد کنید"),
  permissionId: z.number().min(1, "دسترسی موردنظر را وارد کنید"),
});

// ----------------------------------------------------------------------

export function PermissionCategoryNewForm({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [permissionCategoryId, setPermissionCategoryId] = useState();

  const { createPermissionCategory, createPermissionCategoryLoading } =
    useCreatePermissionCategoryMutation();

  const { permissions, permissionsLoading } = usePermissionsQuery();

  const { addPermissionToCategory, addPermissionToCategoryLoading } =
    useAddPermissionToCategoryMutation();

  // const { permissionsOfCategory, permissionsOfCategoryLoading } =
  //   usePermissionsOfCategoryQuery(permissionCategoryId);

  const {
    register,
    trigger,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newPermissionCategorySchema),
    defaultValues: {
      name: "",
      permissionId: 0,
    },
  });

  const onSubmit = async () => {
    const isValid = await trigger("name");

    if (isValid) {
      createPermissionCategory(
        { name: getValues("name") },
        {
          onSuccess: ({ data }) => {
            setPermissionCategoryId(data.id);
            setStep(1);
          },
        },
      );
    }
  };

  const handleAddPermission = async (permissionId) => {
    const isValid = await trigger("permissionId");

    if (isValid) {
      addPermissionToCategory({
        categoryId: permissionCategoryId,
        permissionIds: [permissionId],
      });
    }
  };

  if (permissionsLoading) return "Loading...";

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex items-center justify-between">
        <DialogTitle className="text-orange-500!">گروه جدید</DialogTitle>

        <div className="mr-3 flex h-7 items-center">
          <button
            type="button"
            onClick={onClose}
            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-hidden"
          >
            <span className="absolute -inset-2.5" />
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>

      <Divider className="mt-3" />

      <DialogBody className="mt-3!">
        <TabGroup selectedIndex={step} onChange={setStep}>
          <div className="border-b border-gray-200">
            <TabList as="nav" className="-mb-px flex">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className="w-1/2 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 data-hover:border-gray-300 data-hover:text-gray-700 data-selected:border-orange-500 data-selected:text-orange-600"
                  disabled={tab.disabled}
                >
                  {tab.name}
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels className="mt-8">
            <TabPanel>
              <Field>
                <Label>نام گروه</Label>
                <Input invalid={!!errors.name} {...register("name")} />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </Field>
            </TabPanel>

            <TabPanel>
              <div className="flex items-start gap-x-3">
                <Field className="flex-1">
                  <Controller
                    name="permissionId"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Listbox value={value} onChange={onChange}>
                        {permissions.data.map((permission) => (
                          <ListboxOption
                            key={permission.id}
                            value={permission.id}
                          >
                            <ListboxLabel>{permission.text}</ListboxLabel>
                          </ListboxOption>
                        ))}
                      </Listbox>
                    )}
                  />

                  {errors.permissionId && (
                    <ErrorMessage>{errors.permissionId.message}</ErrorMessage>
                  )}
                </Field>

                <button
                  className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500"
                  onClick={() => handleAddPermission(getValues("permissionId"))}
                >
                  افزودن
                </button>
              </div>

              {/* <div>
                {permissionsOfCategory?.data.map((p) => (
                  <li>{p.id}</li>
                ))}
              </div> */}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </DialogBody>

      <DialogActions>
        {step === 0 && (
          <>
            <Button
              plain
              onClick={() => {
                onClose();
                reset();
              }}
            >
              انصراف
            </Button>

            <button
              disabled={createPermissionCategoryLoading}
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs not-disabled:hover:bg-orange-400 disabled:opacity-50"
              onClick={onSubmit}
            >
              {createPermissionCategoryLoading ? (
                <Loading />
              ) : (
                <>
                  تایید و ادامه
                  <ChevronLeftIcon
                    aria-hidden="true"
                    className="-ml-0.5 size-5"
                  />
                </>
              )}
            </button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
