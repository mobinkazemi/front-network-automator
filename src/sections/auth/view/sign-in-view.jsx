import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/input";
import { Loading } from "@/components/loading";
import { Field, FieldGroup, Label, ErrorMessage } from "@/components/fieldset";

import { useLogin } from "@/actions/user";
import { Link } from "react-router";

// ----------------------------------------------------------------------

const signInSchema = z.object({
  username: z.string().min(1, "نام کاربری را وارد کنید"),
  password: z.string().min(1, "رمزعبور را وارد کنید"),
});

// ----------------------------------------------------------------------

export function SignInView() {
  const { mutate, loginLoading } = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    mutate(data);
  });

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img alt="دوران" src="/images/logo.png" className="h-14 w-auto" />

            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              ورود به حساب کاربری
            </h2>
          </div>

          <div className="mt-10">
            <form className="space-y-6" onSubmit={onSubmit}>
              <FieldGroup>
                <Field>
                  <Label>نام کاربری</Label>
                  <Input {...register("username")} />
                  {errors.username && (
                    <ErrorMessage>{errors.username.message}</ErrorMessage>
                  )}
                </Field>

                <Field>
                  <Label>رمزعبور</Label>
                  <Input type="password" {...register("password")} />
                  {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                  )}
                </Field>
              </FieldGroup>

              <div className="flex items-center justify-between">
                <div className="text-sm/6">
                  <Link
                    to="/auth/reset-password"
                    className="font-semibold text-orange-500 hover:text-orange-400"
                  >
                    فراموشی رمزعبور؟
                  </Link>
                </div>
              </div>

              <div>
                <button
                  disabled={loginLoading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs not-disabled:hover:bg-orange-400 disabled:opacity-50"
                >
                  {loginLoading ? <Loading /> : "ورود"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          alt=""
          src="/images/auth/banner.png"
          className="absolute inset-0 size-full"
        />
      </div>
    </div>
  );
}
