import z from "zod";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Label } from "@/components/fieldset";
import { DialogActions, DialogBody } from "@/components/dialog";
import { Field, FieldGroup, ErrorMessage } from "@/components/fieldset";

import axiosInstance from "@/utils/axios";
import { useState } from "react";
import { toast } from "sonner";

// ----------------------------------------------------------------------

const newRoleSchema = z.object({
  name: z.string().nonempty("نام نقش را وارد کنید"),
  maxRequestPerMinute: z
    .string()
    .nonempty("حداکثر درخواست مجاز نقش را وارد کنید"),
  workingDayLimit: z.array(z.string()),
});

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

const create = async (data) => {
  const response = await axiosInstance.post("/role/create", data);
  return response.data;
};

// ----------------------------------------------------------------------

export function RoleNewStepOne({ setStep, setRoleId }) {
  const [workingTimeLimitStart, setWorkingTimeLimitStart] = useState("");
  const [workingTimeLimitEnd, setWorkingTimeLimitEnd] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newRoleSchema),
    defaultValues: {
      name: "",
      maxRequestPerMinute: "",
      workingDayLimit: [],
    },
  });

  const { mutate: createRole } = useMutation({
    mutationFn: create,
  });

  const onSubmit = handleSubmit((data) => {
    createRole(
      {
        ...data,
        ...(workingTimeLimitStart && {
          workingTimeLimitStart: workingTimeLimitStart.toString(),
        }),
        ...(workingTimeLimitEnd && {
          workingTimeLimitEnd: workingTimeLimitEnd.toString(),
        }),
      },
      {
        onSuccess: ({ data }) => {
          setRoleId(data.id);
          setStep(2);
        },
        onError: (error) => toast.error(error.response.data.detail),
      },
    );
  });

  return (
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
              <ErrorMessage>{errors.maxRequestPerMinute.message}</ErrorMessage>
            )}
          </Field>

          <fieldset>
            <legend className="text-sm font-medium">محدودیت روزانه نقش</legend>

            <div className="mt-3 grid grid-cols-4 space-y-5">
              {daysOfWeek.map((day) => (
                <div key={day.value} className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        defaultChecked
                        id={day.value}
                        type="checkbox"
                        value={day.value}
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-orange-600 checked:bg-orange-600 indeterminate:border-orange-600 indeterminate:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        {...register("workingDayLimit")}
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-sm/6">
                    <label
                      htmlFor={day.value}
                      className="font-medium text-gray-900"
                    >
                      {day.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="flex justify-between gap-x-6">
            <Field>
              <Label>ساعت شروع</Label>

              <DatePicker
                render={<Input />}
                containerClassName="w-full mt-3"
                disableDayPicker
                format="HH:mm"
                plugins={[<TimePicker hideSeconds />]}
                calendarPosition="top-right"
                value={workingTimeLimitStart}
                onChange={(value) => setWorkingTimeLimitStart(value)}
              />
            </Field>

            <Field>
              <Label>ساعت پایان</Label>

              <DatePicker
                render={<Input />}
                containerClassName="w-full mt-3"
                disableDayPicker
                format="HH:mm"
                plugins={[<TimePicker hideSeconds />]}
                calendarPosition="top-right"
                value={workingTimeLimitEnd}
                onChange={(value) => setWorkingTimeLimitEnd(value)}
              />
            </Field>
          </div>
        </FieldGroup>
      </DialogBody>

      <DialogActions>
        <Button type="submit" color="orange">
          ثبت نقش
        </Button>
      </DialogActions>
    </form>
  );
}
