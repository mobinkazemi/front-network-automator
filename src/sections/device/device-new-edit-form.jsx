import { useState } from "react";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { DeviceNewEditStepOne } from "./device-new-edit-step-one";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeviceNewEditStepTwo } from "./device-new-edit-step-two";

// ----------------------------------------------------------------------

const newDeviceSchema = z.object({
  ip: z.string().nonempty("آی پی را وارد کنید"),
  type: z.string().nonempty("نوع دستگاه را انتخاب کنید"),
  subtype: z.string().nonempty("نوع خاص دستگاه را انتخاب کنید"),
});

// ----------------------------------------------------------------------

export function DeviceNewEditForm({ open, onClose }) {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(newDeviceSchema),
    defaultValues: {
      ip: "",
      type: "",
      subtype: "",
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">ایجاد دستگاه جدید</DialogTitle>

      {step === 1 && (
        <DeviceNewEditStepOne setStep={setStep} methods={methods} />
      )}

      {step === 2 && (
        <DeviceNewEditStepTwo methods={methods} onClose={onClose} setStep={setStep} />
      )}
    </Dialog>
  );
}
