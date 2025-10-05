import { useState } from "react";

import { Dialog, DialogTitle } from "@/components/dialog";

import { RoleEditStepOne } from "./role-edit-step-one";
import { RoleEditStepTwo } from "./role-edit-step-two";

// ----------------------------------------------------------------------

export function RoleEditDialog({ open, onClose, role }) {
  const [step, setStep] = useState(1);
  const [roleId, setRoleId] = useState();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-orange-500!">ویرایش نقش</DialogTitle>

      {step === 1 && (
        <RoleEditStepOne setStep={setStep} setRoleId={setRoleId} role={role} />
      )}

      {step === 2 && (
        <RoleEditStepTwo roleId={roleId} onClose={onClose} setStep={setStep} />
      )}
    </Dialog>
  );
}
