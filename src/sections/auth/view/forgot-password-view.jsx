import { toast } from "sonner";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "@/utils/axios";

import { ForgetPasswordSuccess } from "../forget-password-success";
import { ForgotPasswordEnterUsername } from "../forgot-password-enter-username";
import { ForgotPasswordEnterNewPassword } from "../forget-password-enter-new-password";

// ----------------------------------------------------------------------

export function ForgotPasswordView() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [uuid, setUuid] = useState("");

  const { mutate: forgetPassword } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(
        "/user/myself/forgotPassword",
        data,
      );

      return response.data;
    },
  });

  const { mutate: resetPassword } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(
        "/user/myself/verifyForgotPassword",
        data,
      );

      return response.data;
    },
  });

  const handleUsernameSubmit = ({ forgetPasswordField }) => {
    forgetPassword(
      { forgetPasswordField },
      {
        onSuccess: ({ data }) => {
          setUuid(data.uuid);
        },
        onError: (error) => toast.error(error.response.data.detail),
      },
    );
  };

  const handleResetPassword = ({ otp, newPassword }) => {
    resetPassword(
      { uuid, otp, newPassword },
      {
        onSuccess: () => {
          setIsSuccess(true);
        },
        onError: (error) => toast.error(error.response.data.detail),
      },
    );
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="z-50 w-full max-w-md rounded-2xl bg-white p-8 shadow-xs">
        {!uuid && !isSuccess && (
          <ForgotPasswordEnterUsername onSubmit={handleUsernameSubmit} />
        )}

        {uuid && !isSuccess && (
          <ForgotPasswordEnterNewPassword onSubmit={handleResetPassword} />
        )}

        {isSuccess && <ForgetPasswordSuccess />}
      </div>

      <div className="absolute inset-0">
        <img
          src="/images/auth/background.png"
          alt=""
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
