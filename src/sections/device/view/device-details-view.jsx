import ReactJsonView from "@microlink/react-json-view";

import { Button } from "@/components/button";

import { useBoolean } from "@/hooks/use-boolean";

import { useAssetsQuery } from "@/actions/device";

import { DeviceHardeningDialog } from "../device-hardening-dialog";

// ----------------------------------------------------------------------

export function DeviceDetailsView() {
  const deviceHardening = useBoolean();

  const { assets, assetsLoading } = useAssetsQuery();

  if (assetsLoading) return "Loading...";

  return (
    <>
      <Button onClick={deviceHardening.onTrue}>مقاوم سازی</Button>

      <ReactJsonView
        src={assets.data[0]}
        style={{ direction: "ltr" }}
        theme="monokai"
        collapsed={1}
        iconStyle="circle"
        name={false}
        displayDataTypes={false}
        showComma={false}
        enableClipboard={false}
      />

      <DeviceHardeningDialog
        open={deviceHardening.value}
        onClose={deviceHardening.onFalse}
      />
    </>
  );
}
