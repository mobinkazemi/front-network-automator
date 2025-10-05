import {
  RadioGroup as HeadlessRadioGroup,
  Field as HeadlessField,
  Label as HeadlessLabel,
} from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Radio } from "@/components/radio";
import { Button } from "@/components/button";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
import { ErrorMessage, Field, FieldGroup, Label } from "@/components/fieldset";

import axiosInstance from "@/utils/axios";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { toast } from "sonner";

// ----------------------------------------------------------------------

const get = async () => {
  const response = await axiosInstance.get("/devices/firewall/feed/file-names");

  return response.data;
};

const create = async (data) => {
  const response = await axiosInstance.post(
    "/devices/firewall/feed/create",
    data,
  );

  return response.data;
};

// ----------------------------------------------------------------------

const fileTypeOptions = [
  { name: "فیدهای موجود", value: "available_files" },
  { name: "فید جدید", value: "new_file" },
];

// ----------------------------------------------------------------------

export function FeedNewEditForm({ open, onClose }) {
  const [removeDate, setRemoveDate] = useState("");

  const queryClient = useQueryClient();

  const { data: fileNames, isPending: fileNamesLoading } = useQuery({
    queryKey: ["file-names"],
    queryFn: get,
  });

  const { mutate: createFeed } = useMutation({
    mutationFn: create,
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "",
      fileType: "available_files",
      fileName: "",
      item: "",
      source: "",
    },
  });

  const fileType = watch("fileType");

  const onSubmit = handleSubmit((data) => {
    createFeed(
      {
        ...data,
        removeDate: new Date(removeDate).toISOString(),
      },
      {
        onSuccess: () => {
          reset();
          setRemoveDate('')

          queryClient.invalidateQueries({ queryKey: ["feeds"] });
          queryClient.invalidateQueries({ queryKey: ["file-names"] });

          onClose();
        },
        onError: (error) => toast.error(error.response.data.detail)
      },
    );
  });

  if (fileNamesLoading) return "Loading...";

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">تغذیه جدید</DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogBody>
          <FieldGroup>
            <Field>
              <Label>نوع عملکرد</Label>

              <Controller
                name="type"
                control={control}
                rules={{ required: "نوع عملکرد را انتخاب کنید" }}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <Listbox
                      invalid={!!error}
                      value={value}
                      onChange={onChange}
                    >
                      <ListboxOption value="block">
                        <ListboxLabel>مسدود</ListboxLabel>
                      </ListboxOption>

                      <ListboxOption value="allow">
                        <ListboxLabel>مجاز</ListboxLabel>
                      </ListboxOption>
                    </Listbox>

                    {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
                  </>
                )}
              />
            </Field>

            <Field>
              <div className="flex justify-between">
                <Label className="font-medium">نام فید</Label>

                <Controller
                  name="fileType"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <HeadlessRadioGroup
                      className="flex gap-6 sm:gap-8"
                      value={value}
                      onChange={onChange}
                    >
                      {fileTypeOptions.map((fileType) => (
                        <HeadlessField
                          key={fileType.value}
                          className="flex items-center gap-2"
                        >
                          <Radio color="orange" value={fileType.value} />

                          <HeadlessLabel className="text-base/6 select-none sm:text-sm/6">
                            {fileType.name}
                          </HeadlessLabel>
                        </HeadlessField>
                      ))}
                    </HeadlessRadioGroup>
                  )}
                />
              </div>

              {fileType === "available_files" && (
                <Controller
                  name="fileName"
                  control={control}
                  rules={{ required: "نام فایل را انتخاب کنید" }}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <>
                      <Listbox
                        className="mt-3"
                        invalid={!!error}
                        value={value}
                        onChange={onChange}
                      >
                        {fileNames.data.map((fileName) => (
                          <ListboxOption key={fileName} value={fileName}>
                            <ListboxLabel>{fileName}</ListboxLabel>
                          </ListboxOption>
                        ))}
                      </Listbox>

                      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
                    </>
                  )}
                />
              )}

              {fileType === "new_file" && (
                <>
                  <Input
                    invalid={!!errors.fileName}
                    className="mt-3"
                    {...register("fileName", {
                      required: "نام فایل را وارد کنید",
                    })}
                  />

                  {!!errors.fileName && (
                    <ErrorMessage>{errors.fileName.message}</ErrorMessage>
                  )}
                </>
              )}
            </Field>

            <Field>
              <Label>آی پی</Label>

              <Input
                invalid={!!errors.item}
                {...register("item", { required: "آی پی را وارد کنید" })}
              />

              {!!errors.item && (
                <ErrorMessage>{errors.item.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>مرجع</Label>

              <Input
                invalid={!!errors.item}
                {...register("source", { required: "مرجع را وارد کنید" })}
              />

              {!!errors.source && (
                <ErrorMessage>{errors.source.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>تاریخ حذف</Label>

              <DatePicker
                render={<Input />}
                calendar={persian}
                locale={persian_fa}
                containerClassName="w-full mt-3"
                calendarPosition="top-right"
                value={removeDate}
                onChange={(value) => setRemoveDate(value)}
              />
            </Field>
          </FieldGroup>
        </DialogBody>

        <DialogActions>
          <Button type="submit" color="orange">
            ثبت فید
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
