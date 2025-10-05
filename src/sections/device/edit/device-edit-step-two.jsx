import z from "zod";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { DialogBody } from "@/components/dialog";
import { DialogActions } from "@/components/dialog";
import { Field, Label } from "@/components/fieldset";

import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const get = async (deviceId) => {
  const response = await axiosInstance.get(`/devicesCredential/${deviceId}`);
  return response.data;
};

const updateDevice = async (data) => {
  const response = await axiosInstance.post("/devices/update", data);
  return response.data;
};

const updateDeviceCredential = async (data) => {
  const response = await axiosInstance.post("/devicesCredential/update", data);
  return response.data;
};

// ----------------------------------------------------------------------

const deviceCredentialSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty(),
});

// ----------------------------------------------------------------------

export function DeviceEditStepTwo({ methods, onClose, setStep, device }) {
  const { getValues, reset: resetDeviceFields } = methods;

  const queryClient = useQueryClient();

  const { data: deviceCredential, isPending: deviceCredentialLoading } =
    useQuery({
      queryKey: ["device-credential", device.id],
      queryFn: () => get(device.id),
    });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(deviceCredentialSchema),
    defaultValues: {
      username: deviceCredential?.data[0]?.username,
      password: deviceCredential?.data[0]?.password,
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: updateDevice,
  });

  const onSubmit = handleSubmit((credential) => {
    update(
      {
        ip: getValues("ip"),
        type: getValues("type"),
        subtype: getValues("subtype"),
      },
      {
        onSuccess: ({ data }) => {
          updateDeviceCredential({
            ...credential,
            deviceId: data.id,
            id: deviceCredential.data[0].id,
          });

          queryClient.invalidateQueries({ queryKey: ["devices"] });

          reset();
          resetDeviceFields();

          onClose();

          setStep(1);
        },
      },
    );
  });

  if (deviceCredentialLoading) return "Loading...";

  return (
    <form onSubmit={onSubmit}>
      <DialogBody>
        <dl className="mt-8 space-y-4">
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">آی پی</dt>
            <dd className="font-bold">{getValues("ip")}</dd>
          </div>

          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">نوع دستگاه</dt>
            <dd className="font-bold">{getValues("type")}</dd>
          </div>

          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">نوع خاص دستگاه</dt>
            <dd className="font-bold">{getValues("subtype")}</dd>
          </div>
        </dl>

        <div className="mt-4 space-y-4">
          <Disclosure
            as="div"
            className="rounded-lg bg-gray-200 p-2"
            defaultOpen={true}
          >
            <DisclosureButton className="group flex w-full items-center justify-between py-2">
              <span className="text-sm font-bold text-gray-800">SSH</span>

              <div className="flex">
                {/* <button
                        type="button"
                        className="ml-2 border-l border-white pl-2 text-red-600 hover:text-red-500"
                      >
                        <TrashIcon aria-hidden="true" className="size-5" />
                      </button> */}

                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 text-gray-500 group-data-open:hidden"
                />

                <ChevronUpIcon
                  aria-hidden="true"
                  className="size-5 text-gray-500 group-not-data-open:hidden"
                />
              </div>
            </DisclosureButton>

            <DisclosurePanel className="flex gap-x-4 rounded-md bg-white p-4">
              <Field>
                <Label>نام کاربری</Label>
                <Input invalid={!!errors.username} {...register("username")} />
              </Field>

              <Field>
                <Label>رمزعبور</Label>
                <Input invalid={!!errors.password} {...register("password")} />
              </Field>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </DialogBody>

      <DialogActions>
        <Button type="submit" color="orange">
          ثبت
        </Button>
      </DialogActions>
    </form>
  );
}
