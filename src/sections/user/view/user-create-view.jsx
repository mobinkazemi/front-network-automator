import { Link, useNavigate } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
import { Field, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import { Controller, useForm } from "react-hook-form";
import axiosInstance from "@/utils/axios";
import { useState } from "react";
import { ErrorMessage } from "@/components/fieldset";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "@/components/button";
import { Checkbox, CheckboxField } from "@/components/checkbox";
import { toast } from "sonner";

// ----------------------------------------------------------------------

const getRoles = async () => {
  const response = await axiosInstance.get("/role/list", {
    params: {
      list_limit: 100,
    },
  });

  return response.data;
};

const registerUser = async (data) => {
  const response = await axiosInstance.post("/auth/register", data);

  return response.data;
};

// ----------------------------------------------------------------------

const newUserSchema = z.object({
  roleId: z.number().min(1, "نقش کاربری را انتخاب کنید"),
  username: z.string().nonempty("نام کاربری را وارد کنید"),
  firstName: z.string().nonempty("نام را وارد کنید"),
  lastName: z.string().nonempty("نام خانوادگی را وارد کنید"),
  gender: z.string(),
  nationalId: z.string(),
  education: z.string(),
  cellphone: z.string(),
  email: z.string(),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%])[A-Za-z\d@!#$%]{6,}$/, {
      message:
        "رمز عبور باید حداقل 6 کاراکتر و شامل حروف بزرگ، حروف کوچک، عدد و یکی از نمادهای @ ! # $ % باشد",
    }),
  passwordHistoryCount: z.string(),
  passwordAdvantageDays: z.string(),
  expirePasswordDays: z.string(),
});

const educationOptions = [
  "سیکل",
  "پیش دانشگاهی",
  "دیپلم",
  "کاردانی",
  "کارشناسی",
  "کارشناسی ارشد",
  "دکتری",
];

// ----------------------------------------------------------------------

export function UserCreateView() {
  const navigate = useNavigate();

  const [birthday, setBirthday] = useState("");
  const [deactivedAt, setDeactivedAt] = useState("");
  const [mustChangePassword, setMustChangePassword] = useState(false);

  const { data: roles, isPending: rolesLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
  });

  const { mutate } = useMutation({
    mutationFn: registerUser,
  });

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      roleId: 0,
      username: "",
      firstName: "",
      lastName: "",
      gender: "",
      nationalId: "",
      education: "",
      cellphone: "",
      email: "",
      password: "",
      passwordHistoryCount: "",
      passwordAdvantageDays: "",
      expirePasswordDays: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data)
        .filter(([_, v]) => v !== "") // حذف مقادیر خالی
        .map(([k, v]) => [
          k,
          /^\d+$/.test(v) ? Number(v) : v, // اگر فقط عدد بود، تبدیل به عدد
        ]),
    );

    mutate(
      {
        ...cleanedData,
        mustChangePassword,
        ...(birthday && {
          birthday: new Date(birthday).toLocaleDateString("en-CA", {
            timeZone: "Asia/Tehran",
          }),
        }),
        ...(deactivedAt && {
          deactivedAt: new Date(deactivedAt).toLocaleDateString("en-CA", {
            timeZone: "Asia/Tehran",
          }),
        }),
      },
      { onSuccess: () => navigate("/dashboard/user") },
      {
        onError: (error) => toast.error(error.response.data.detail),
      },
    );
  });

  if (rolesLoading) return "Loading...";

  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="px-6 py-5">
          <div className="-mt-2 -mr-4 flex items-center justify-between">
            <div className="mt-2 mr-4">
              <h3 className="text-base font-semibold text-orange-500">
                ایجاد کاربر جدید
              </h3>
            </div>

            <div className="mt-2 mr-4 shrink-0">
              <Link
                to="/dashboard/user"
                className="inline-flex items-center gap-x-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                <ChevronRightIcon
                  aria-hidden="true"
                  className="-mr-0.5 size-4"
                />
                بازگشت به لیست
              </Link>
            </div>
          </div>
        </div>

        <form className="p-6" onSubmit={onSubmit}>
          <div className="rounded-2xl bg-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">
                  نقش کاربری
                </span>

                <span className="mt-1 text-xs text-gray-500">
                  نقش کاربری را با توجه به سمت و نقش کاربر یا کارمند در تخصص کار
                  خود میتوانید انتخاب نمائید.
                </span>
              </div>

              <Field>
                <Controller
                  name="roleId"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Listbox
                      className="w-72!"
                      value={value}
                      onChange={onChange}
                    >
                      {roles.data.map((role) => (
                        <ListboxOption key={role.id} value={role.id}>
                          <ListboxLabel>{role.name}</ListboxLabel>
                        </ListboxOption>
                      ))}
                    </Listbox>
                  )}
                />

                {errors.roleId && (
                  <ErrorMessage>{errors.roleId.message}</ErrorMessage>
                )}
              </Field>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8 border-b border-gray-200 pb-8">
            <Field>
              <Label>نام کاربری</Label>

              <Input invalid={errors.username} {...register("username")} />

              {errors.username && (
                <ErrorMessage>{errors.username.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>نام</Label>

              <Input invalid={errors.firstName} {...register("firstName")} />

              {errors.firstName && (
                <ErrorMessage>{errors.firstName.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>نام خانوادگی</Label>

              <Input invalid={errors.lastName} {...register("lastName")} />

              {errors.lastName && (
                <ErrorMessage>{errors.lastName.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>جنسیت</Label>

              <Controller
                name="gender"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Listbox value={value} onChange={onChange}>
                    <ListboxOption value={1}>
                      <ListboxLabel>مرد</ListboxLabel>
                    </ListboxOption>

                    <ListboxOption value={2}>
                      <ListboxLabel>زن</ListboxLabel>
                    </ListboxOption>
                  </Listbox>
                )}
              />

              {errors.gender && (
                <ErrorMessage>{errors.gender.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>کدملی</Label>

              <Input {...register("nationalId")} />

              {errors.nationalId && (
                <ErrorMessage>{errors.nationalId.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>تحصیلات</Label>

              <Controller
                name="education"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Listbox value={value} onChange={onChange}>
                    {educationOptions.map((education) => (
                      <ListboxOption key={education} value={education}>
                        <ListboxLabel>{education}</ListboxLabel>
                      </ListboxOption>
                    ))}
                  </Listbox>
                )}
              />

              {errors.education && (
                <ErrorMessage>{errors.education.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>شماره موبایل</Label>

              <Input invalid={errors.cellphone} {...register("cellphone")} />

              {errors.cellphone && (
                <ErrorMessage>{errors.cellphone.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>ایمیل</Label>

              <Input {...register("email")} />

              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>تاریخ تولد</Label>

              <DatePicker
                render={<Input />}
                calendar={persian}
                locale={persian_fa}
                containerClassName="w-full mt-3"
                calendarPosition="top-right"
                value={birthday}
                onChange={(value) => setBirthday(value)}
              />
            </Field>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8 border-b border-gray-200 pb-8">
            <Field>
              <Label>رمزعبور انتخابی</Label>

              <Input invalid={errors.password} {...register("password")} />

              {/* <button onClick={}>GENERATE</button> */}

              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>تعداد سابقه ذخیره رمزعبور</Label>

              <Input
                invalid={errors.passwordHistoryCount}
                {...register("passwordHistoryCount")}
              />

              {errors.passwordHistoryCount && (
                <ErrorMessage>
                  {errors.passwordHistoryCount.message}
                </ErrorMessage>
              )}
            </Field>

            <CheckboxField className="col-span-full">
              <Checkbox
                color="orange"
                checked={mustChangePassword}
                onChange={setMustChangePassword}
              />
              <Label>تغییر رمزعبور در هنگام ورود</Label>
            </CheckboxField>

            <Field>
              <Label>تعداد روز تغییر رمزعبور</Label>

              <Input
                invalid={errors.passwordAdvantageDays}
                {...register("passwordAdvantageDays")}
              />

              {errors.passwordAdvantageDays && (
                <ErrorMessage>
                  {errors.passwordAdvantageDays.message}
                </ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>تعداد روز مهلت اضافه پس از انقضای رمزعبور</Label>

              <Input
                invalid={errors.expirePasswordDays}
                {...register("expirePasswordDays")}
              />

              {errors.expirePasswordDays && (
                <ErrorMessage>{errors.expirePasswordDays.message}</ErrorMessage>
              )}
            </Field>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8 border-b border-gray-200 pb-8">
            <Field>
              <Label>تاریخ غیرفعال شدن حساب کاربری</Label>

              <DatePicker
                render={<Input />}
                calendar={persian}
                locale={persian_fa}
                containerClassName="w-full mt-3"
                calendarPosition="top-right"
                value={birthday}
                onChange={(value) => setDeactivedAt(value)}
              />
            </Field>
          </div>

          <div className="mt-8 flex justify-end">
            <Button type="submit" color="orange">
              ثبت کاربر
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
