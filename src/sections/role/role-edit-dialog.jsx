import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogBody,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/checkbox";
import {
  ErrorMessage,
  Field,
  FieldGroup,
  Label,
  Fieldset,
  Legend,
} from "@/components/fieldset";

import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const update = async (data) => {
  const response = axiosInstance.patch("/role/update", data);

  return response.data;
};

const daysOfWeek = [
  { value: 0, label: "شنبه" },
  { value: 1, label: "یکشنبه" },
  { value: 2, label: "دوشنبه" },
  { value: 3, label: "سه شنبه" },
  { value: 4, label: "چهارشنبه" },
  { value: 5, label: "پنج شنبه" },
  { value: 6, label: "جمعه" },
];

// ----------------------------------------------------------------------

export function RoleEditDialog({ open, onClose, role }) {
  const queryClient = useQueryClient();

  const [workingTimeLimitStart, setWorkingTimeLimitStart] = useState("");
  const [workingTimeLimitEnd, setWorkingTimeLimitEnd] = useState("");

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const defaultValues = useMemo(
    () => ({
      name: role.name || "",
      maxRequestPerMinute: role.maxRequestPerMinute || "",
      workingDayLimit: role.workingDayLimit || [],
    }),
    [role],
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(newRoleSchema),
    defaultValues,
  });

  useEffect(() => {
    if (role) {
      reset(defaultValues);

      setWorkingTimeLimitStart(role?.workingTimeLimit?.split("-")[0] || "");

      setWorkingTimeLimitEnd(role?.workingTimeLimit?.split("-")[1] || "");
    }
  }, [role, defaultValues, reset]);

  const { mutate } = useMutation({
    mutationFn: update,
  });

  const onSubmit = handleSubmit((data) => {
    mutate(
      {
        id: role.id,
        ...data,
        workingTimeLimitStart,
        workingTimeLimitEnd,
      },
      {
        onSuccess: () => {
          toast.success("نقش با موفقیت ویرایش شد");
          queryClient.invalidateQueries({ queryKey: ["roles"] });
          onClose();
        },
        onError: (error) => toast.error(error.response.data.detail),
      },
    );
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">ویرایش نقش</DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogBody>
          <FieldGroup>
            <Field>
              <Label>نام نقش</Label>

              <Input invalid={!!errors.name} {...register("name")} />

              {!!errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>حداکثر درخواست مجاز نقش</Label>

              <Input
                invalid={!!errors.maxRequestPerMinute}
                {...register("maxRequestPerMinute")}
              />

              {!!errors.maxRequestPerMinute && (
                <ErrorMessage>
                  {errors.maxRequestPerMinute.message}
                </ErrorMessage>
              )}
            </Field>

            <Fieldset>
              <Legend>محدودیت روزانه نقش</Legend>

              <Controller
                name="workingDayLimit"
                control={control}
                render={({ field }) => (
                  <CheckboxGroup className="grid grid-cols-4 space-y-5">
                    {daysOfWeek.map((day) => (
                      <CheckboxField key={day.value}>
                        <Checkbox
                          color="orange"
                          checked={field.value.includes(day.value)}
                          onChange={() =>
                            field.onChange(getSelected(field.value, day.value))
                          }
                        />

                        <Label>{day.label}</Label>
                      </CheckboxField>
                    ))}
                  </CheckboxGroup>
                )}
              />
            </Fieldset>

            <div className="flex justify-between gap-x-6">
              <Field>
                <Label>ساعت شروع</Label>

                <Input
                  value={workingTimeLimitStart}
                  onChange={(e) => setWorkingTimeLimitStart(e.target.value)}
                />
              </Field>

              <Field>
                <Label>ساعت پایان</Label>

                <Input
                  value={workingTimeLimitEnd}
                  onChange={(e) => setWorkingTimeLimitEnd(e.target.value)}
                />
              </Field>
            </div>
          </FieldGroup>
        </DialogBody>

        <DialogActions>
          <Button type="submit" color="orange">
            ویرایش نقش
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
