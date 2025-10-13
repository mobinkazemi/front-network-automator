import { useState } from "react";

import { Dialog, DialogTitle } from "@/components/dialog";

import { RoleNewStepOne } from "./role-new-step-one";
import { RoleNewStepTwo } from "./role-new-step-two";

// ----------------------------------------------------------------------

export function RoleNewDialog({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [roleId, setRoleId] = useState();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">ایجاد نقش جدید</DialogTitle>

      {step === 1 && <RoleNewStepOne setStep={setStep} setRoleId={setRoleId} />}

      {step === 2 && (
        <RoleNewStepTwo roleId={roleId} onClose={onClose} setStep={setStep} />
      )}
    </Dialog>
  );
}
