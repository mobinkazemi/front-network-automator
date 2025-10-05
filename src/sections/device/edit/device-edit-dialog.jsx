import { useState } from "react";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeviceEditStepOne } from "./device-edit-step-one";
import { DeviceEditStepTwo } from "./device-edit-step-two";

// ----------------------------------------------------------------------

const newDeviceSchema = z.object({
  ip: z.string().nonempty("آی پی را وارد کنید"),
  type: z.string().nonempty("نوع دستگاه را انتخاب کنید"),
  subtype: z.string().nonempty("نوع خاص دستگاه را انتخاب کنید"),
});

// ----------------------------------------------------------------------

export function DeviceEditDialog({ open, onClose, device }) {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(newDeviceSchema),
    defaultValues: {
      ip: device.ip,
      type: device.type,
      subtype: device.subtype,
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">ویرایش دستگاه</DialogTitle>

      {step === 1 && <DeviceEditStepOne setStep={setStep} methods={methods} />}

      {step === 2 && (
        <DeviceEditStepTwo
          methods={methods}
          onClose={onClose}
          setStep={setStep}
          device={device}
        />
      )}
    </Dialog>
  );
}
