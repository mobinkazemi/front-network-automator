import { Controller, useForm } from "react-hook-form";

import { useRolesQuery } from "@/actions/role";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Field, FieldGroup, Label } from "@/components/fieldset";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";

// ----------------------------------------------------------------------

const genderOptions = [
  { value: 0, label: "مرد" },
  { value: 1, label: "زن" },
];

const educationOptions = [
  "سیکل",
  "پیش دانشگاهی",
  "ذیپلم",
  "کاردانی",
  "کارشناسی",
  "کارشناسی ارشد",
  "دکترا",
];

// ----------------------------------------------------------------------

export const UserCreateView = () => {
  const { roles, rolesLoading } = useRolesQuery();

  const { register, control } = useForm({
    defaultValues: {
      roleId: 1,
      username: "hojat_ns",
      firstName: "hojat",
      lastName: "nasiri",
      gender: 0,
      nationalId: "0690607108",
      education: "دیپلم",
      cellphone: "09155797471",
      email: "h.nasiri@douran.ir",
      birthday: "",
      password: "",
      passwordHistoryCount: "",
      mustChangePassword: false,
      expirePasswordDays: "",
      passwordAdvantageDays: "",
      active: false,
      deactivedAt: "",
    },
  });

  if (rolesLoading) return "Loading...";

  return (
    <form>
      <FieldGroup>
        <Field>
          <Label>نقش کاربر</Label>

          <Controller
            name="roleId"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Listbox value={value} onChange={onChange}>
                {roles.map((role) => (
                  <ListboxOption key={role.id} value={role.id}>
                    <ListboxLabel>{role.name}</ListboxLabel>
                  </ListboxOption>
                ))}
              </Listbox>
            )}
          />
        </Field>

        <Field>
          <Label>نام کاربری</Label>
          <Input {...register("username")} />
        </Field>

        <Field>
          <Label>نام</Label>
          <Input {...register("firstName")} />
        </Field>

        <Field>
          <Label>نام خانوادگی</Label>
          <Input {...register("lastName")} />
        </Field>

        <Field>
          <Label>جنسیت</Label>

          <Controller
            name="gender"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Listbox value={value} onChange={onChange}>
                {genderOptions.map((gender) => (
                  <ListboxOption key={gender.value} value={gender.value}>
                    <ListboxLabel>{gender.label}</ListboxLabel>
                  </ListboxOption>
                ))}
              </Listbox>
            )}
          />
        </Field>

        <Field>
          <Label>کدملی</Label>
          <Input {...register("nationalId")} />
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
        </Field>

        <Field>
          <Label>شماره موبایل</Label>
          <Input {...register("cellphone")} />
        </Field>

        <Field>
          <Label>ایمیل</Label>
          <Input {...register("email")} />
        </Field>

        <Field>
          <Label>تاریخ تولد</Label>
          <Input {...register("birthday")} />
        </Field>

        <Field>
          <Label>رمزعبور انتخابی</Label>
          <Input {...register("password")} />
        </Field>

        <Field>
          <Label>تعداد سابقه ذخیره رمزعبور</Label>
          <Input {...register("passwordHistoryCount")} />
        </Field>

        <Field>
          <Label>تعداد روز تغییر رمزعبور</Label>
          <Input {...register("expirePasswordDays")} />
        </Field>

        <Field>
          <Label>تعداد روز مهلت اضافه پس از انقضای رمزعبور</Label>
          <Input {...register("passwordAdvantageDays")} />
        </Field>

        <Button>ثبت</Button>
      </FieldGroup>
    </form>
  );
};
