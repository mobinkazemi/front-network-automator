import z from "zod";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { FieldGroup, Field, ErrorMessage } from "@/components/fieldset";

// ----------------------------------------------------------------------

const schema = z.object({
  forgetPasswordField: z
    .string()
    .min(1, "نام کاربری، شماره موبایل یا ایمیل را وارد کنید"),
});

// ----------------------------------------------------------------------

export function ForgotPasswordEnterUsername({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      forgetPasswordField: "",
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
          <h1 className="text-lg font-bold text-orange-500">فراموشی رمزعبور</h1>

          <span className="mt-4 text-sm font-bold text-gray-800">
            نام کاربری، شماره موبایل یا ایمیل خود را وارد کنید
          </span>
        </div>

        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <Input
                invalid={!!errors.forgetPasswordField}
                {...register("forgetPasswordField")}
              />

              {!!errors.forgetPasswordField && (
                <ErrorMessage>
                  {errors.forgetPasswordField.message}
                </ErrorMessage>
              )}
            </Field>

            <Button type="submit" color="orange" className="w-full">
              بازیابی رمزعبور
            </Button>
          </FieldGroup>
        </form>
      </main>

      <footer className="mt-10 flex gap-x-1">
        <div className="h-1.5 w-1/2 rounded-full bg-gray-800"></div>
        <div className="h-1.5 w-1/2 rounded-full bg-gray-200"></div>
      </footer>
    </>
  );
}
