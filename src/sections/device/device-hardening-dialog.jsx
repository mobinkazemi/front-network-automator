import { useState } from "react";

import { useCisQuery, useHistoryQuery } from "@/actions/device";

import { Dialog, DialogBody, DialogTitle } from "@/components/dialog";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
import { Link } from "react-router";

// ----------------------------------------------------------------------

export const DeviceHardeningDialog = ({ open, onClose }) => {
  let [foo, setFoo] = useState("");

  const { cis, cisLoading } = useCisQuery();
  const { history, historyLoading } = useHistoryQuery();

  // const x = history

  if (cisLoading || historyLoading) return "Loading...";
  // console.log(history);

  // const y = Object.entries(history.data).map(([key, value]) => {
  //   console.log(key, value);
  // });

  // console.log(y);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>مقاوم سازی دستگاه</DialogTitle>

      <DialogBody>
        <Listbox value={foo} onChange={setFoo}>
          {cis.data.map((cis) => (
            <ListboxOption key={cis.id} value={cis.id}>
              <ListboxLabel>{cis.name}</ListboxLabel>
            </ListboxOption>
          ))}
        </Listbox>

        <Link to={`cis/${foo}`}>مقاوم سازی</Link>

        <div>
          <h1>تاریخچه</h1>

          <ul>
            {/* {history.map((cis) => {
              cis.map((x) => console.log(x));
            })} */}
            {/* {Object.keys(history.data.grouped).map(([key, value]) => {
              console.log(key);
            })} */}
          </ul>
        </div>
      </DialogBody>
    </Dialog>
  );
};
