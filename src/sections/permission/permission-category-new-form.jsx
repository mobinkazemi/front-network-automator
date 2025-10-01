import z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Field, Label, ErrorMessage } from "@/components/fieldset";

// ----------------------------------------------------------------------

const tabs = [
  { name: "اطلاعات", disabled: false },
  { name: "دسترسی ها", disabled: false },
];

const newPermissionCategorySchema = z.object({
  name: z.string().min(1, "نام گروه را وارد کنید"),
});

// ----------------------------------------------------------------------

export function PermissionCategoryNewForm({ open, onClose }) {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newPermissionCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const handleNext = () => {
    if (step === 0) {
      trigger("name");
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log(selectedIndex);
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex items-center justify-between">
        <DialogTitle className="text-orange-500!">گروه جدید</DialogTitle>

        <div className="mr-3 flex h-7 items-center">
          <button
            type="button"
            onClick={onClose}
            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-hidden"
          >
            <span className="absolute -inset-2.5" />
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>

      <Divider className="mt-3" />

      <DialogBody className="mt-3!">
        <TabGroup selectedIndex={step} onChange={setStep}>
          <div className="border-b border-gray-200">
            <TabList as="nav" className="-mb-px flex">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className="w-1/2 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 data-hover:border-gray-300 data-hover:text-gray-700 data-selected:border-orange-500 data-selected:text-orange-600"
                  disabled={tab.disabled}
                >
                  {tab.name}
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels className="mt-8">
            <TabPanel>
              <Field>
                <Label>نام گروه</Label>
                <Input invalid={!!errors.name} {...register("name")} />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </Field>
            </TabPanel>

            <TabPanel></TabPanel>
          </TabPanels>
        </TabGroup>
      </DialogBody>

      <DialogActions>
        <Button plain>انصراف</Button>

        <Button color="orange">
          تایید و ادامه
          <ChevronLeftIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );
}
