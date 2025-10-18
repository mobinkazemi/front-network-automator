import { Link } from "react-router";
import { OTPInput } from "input-otp";
import { Controller, useForm } from "react-hook-form";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { FieldGroup, ErrorMessage, Field, Label } from "@/components/fieldset";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ----------------------------------------------------------------------

const schema = z
  .object({
    otp: z.string().min(1, "کد یکبار مصرف را وارد کنید"),
    newPassword: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%])[A-Za-z\d@!#$%]{6,}$/,
        {
          message:
            "رمز عبور باید حداقل 6 کاراکتر و شامل حروف بزرگ، حروف کوچک، عدد و یکی از نمادهای @ ! # $ % باشد",
        },
      ),
    confirmPassword: z.string().min(1, "تکرار رمزعبور را وارد کنید"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });

// ----------------------------------------------------------------------

export function ForgotPasswordEnterNewPassword({ onSubmit }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: "",
      newPassword: "",
    },
  });

  return (
    <>
      <header className="flex w-full items-start justify-between">
        <img src="/images/logo.png" alt="" className="w-36" />

        <Link
          to="/auth/sign-in"
          className="inline-flex items-center gap-x-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
        >
          <ChevronRightIcon aria-hidden="true" className="-mr-0.5 size-4" />
          بازگشت
        </Link>
      </header>

      <main className="mt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold text-orange-500">تغییر رمزعبور</h1>

          <span className="mt-4 text-sm font-bold text-gray-800">
            رمزعبور جدید خود را وارد نمایید
          </span>
        </div>

        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <Label>کد یکبار مصرف</Label>

              <Controller
                name="otp"
                control={control}
                render={({ field }) => (
                  <OTPInput
                    maxLength={4}
                    containerClassName="group flex items-center mt-3"
                    render={({ slots }) => (
                      <>
                        <div dir="ltr" className="flex w-full justify-between">
                          {slots.map((slot, idx) => (
                            <Slot key={idx} {...slot} />
                          ))}
                        </div>
                      </>
                    )}
                    {...field}
                  />
                )}
              />

              {!!errors.otp && (
                <ErrorMessage className="mt-3">
                  {errors.otp.message}
                </ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>رمزعبور جدید</Label>

              <Input
                invalid={!!errors.newPassword}
                {...register("newPassword")}
              />

              {!!errors.newPassword && (
                <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>تکرار رمزعبور</Label>

              <Input
                invalid={!!errors.confirmPassword}
                {...register("confirmPassword")}
              />

              {!!errors.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
              )}
            </Field>

            <Button type="submit" color="orange" className="w-full">
              تغییر رمزعبور
            </Button>
          </FieldGroup>
        </form>
      </main>

      <footer className="mt-10 flex gap-x-1">
        <div className="h-1.5 w-1/2 rounded-full bg-gray-800"></div>
        <div className="h-1.5 w-1/2 rounded-full bg-gray-800"></div>
      </footer>
    </>
  );
}

function Slot(props) {
  return (
    <div className="flex h-10 w-20 items-center justify-center rounded-lg border border-gray-200 text-xl shadow-xs">
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
