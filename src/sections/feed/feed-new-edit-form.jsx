import {
  RadioGroup as HeadlessRadioGroup,
  Field as HeadlessField,
  Label as HeadlessLabel,
} from "@headlessui/react";
import { Button } from "@/components/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { ErrorMessage, Field, FieldGroup, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
// import { DatePicker } from "@/components/date-picker";
import { Controller, useForm } from "react-hook-form";
import { useCreateFeedMutation, useFileNamesQuery } from "@/actions/feed";
import { Radio } from "@/components/radio";

// ----------------------------------------------------------------------

const fileTypeOptions = [
  { name: "فایل های موجود", value: "available_files" },
  { name: "فایل جدید", value: "new_file" },
];

// ----------------------------------------------------------------------

export function FeedNewEditForm({ open, onClose }) {
  const { fileNames } = useFileNamesQuery();

  const { mutateAsync: createFeed, isPending: creatingFeed } =
    useCreateFeedMutation();

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
      removeDate: "",
    },
  });

  const fileType = watch("fileType");

  const onSubmit = handleSubmit(async (data) => {
    try {
      createFeed({
        type: data.type,
        fileName: data.fileName,
        item: data.item,
        source: data.source,
        removeDate: data.removeDate,
      });

      reset();

      onClose();
    } catch (error) {
      console.log(error);
    }
  });

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
                <Label className="font-medium">نام feed</Label>

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

              <div className="mt-3">
                <Controller
                  name="removeDate"
                  control={control}
                  rules={{ required: "تاریخ حذف را انتخاب کنید" }}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <>
                      {/* <DatePicker
                        calendarPosition="top-left"
                        invalid={!!error}
                        value={value || ""}
                        onChange={(date) => {
                          onChange(date?.isValid ? date.format() : "");
                        }}
                      /> */}

                      {!!error && (
                        <ErrorMessage className="mt-3">
                          {error.message}
                        </ErrorMessage>
                      )}
                    </>
                  )}
                />
              </div>
            </Field>
          </FieldGroup>
        </DialogBody>

        <DialogActions>
          <Button plain onClick={onClose}>
            انصراف
          </Button>

          <Button type="submit" color="orange" disabled={creatingFeed}>
            ذخیره
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
