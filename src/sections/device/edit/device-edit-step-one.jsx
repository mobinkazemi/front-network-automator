import { Controller } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { DialogActions, DialogBody } from "@/components/dialog";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
import { Field, FieldGroup, Label, ErrorMessage } from "@/components/fieldset";

import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const get = async () => {
  const response = await axiosInstance.get("/devices/types");
  return response.data;
};

// ----------------------------------------------------------------------

export function DeviceEditStepOne({ methods, setStep }) {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = methods;

  const { data: deviceTypes, isPending: deviceTypesLoading } = useQuery({
    queryKey: ["device-types"],
    queryFn: get,
  });

  const deviceTypeValue = watch("type");

  const onSubmit = handleSubmit(() => setStep(2));

  if (deviceTypesLoading) return "Loading...";

  return (
    <form onSubmit={onSubmit}>
      <DialogBody>
        <FieldGroup>
          <Field>
            <Label>آی پی</Label>

            <Input invalid={!!errors.ip} {...register("ip")} />

            {errors.ip && <ErrorMessage>{errors.ip.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label>نوع دستگاه</Label>

            <Controller
              name="type"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Listbox value={value} onChange={onChange}>
                  {Object.keys(deviceTypes.data).map((deviceType) => (
                    <ListboxOption key={deviceType} value={deviceType}>
                      <ListboxLabel>{deviceType}</ListboxLabel>
                    </ListboxOption>
                  ))}
                </Listbox>
              )}
            />

            {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
          </Field>

          <Field disabled={!deviceTypeValue}>
            <Label>نوع خاص دستگاه</Label>

            <Controller
              name="subtype"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Listbox value={value} onChange={onChange}>
                  {deviceTypeValue &&
                    deviceTypes.data[deviceTypeValue].map((subtype) => (
                      <ListboxOption key={subtype} value={subtype}>
                        <ListboxLabel>{subtype}</ListboxLabel>
                      </ListboxOption>
                    ))}
                </Listbox>
              )}
            />

            {errors.subtype && (
              <ErrorMessage>{errors.subtype.message}</ErrorMessage>
            )}
          </Field>
        </FieldGroup>
      </DialogBody>

      <DialogActions>
        <Button type="submit" color="orange">
          تایید و ادامه
        </Button>
      </DialogActions>
    </form>
  );
}
