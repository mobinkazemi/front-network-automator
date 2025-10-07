import { useMeQuery } from "@/actions/user";

import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import axiosInstance from "@/utils/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useBoolean } from "@/hooks/use-boolean";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";

// ----------------------------------------------------------------------

const get = async () => {
  const response = await axiosInstance.get("/home/numeric-reports");
  return response.data;
};

// const read = async () => {
//   await axiosInstance.patch("/changelog/update_user_changelog");
// };

// ----------------------------------------------------------------------

export function OverviewView() {
  const [showModal, setShowModal] = useState(true);
  // const [loading, setLoading] = useState(true);

  const { me, meLoading, isSuccess } = useMeQuery();

  const { data, isPending } = useQuery({
    queryKey: ["numeric-reports"],
    queryFn: get,
  });

  // const { mutate } = useMutation({
  //   mutationFn: read,
  // });

  // const onRead = () => {
  //   mutate();

  //   setShowModal(false);
  // };

  // useEffect(() => {
  //   setShowModal(true);
  //   // if (isSuccess && me.data.changeLog.length != 0) {
  //   //   // console.log(me.data.changeLog.length != 0)
  //   //   setShowModal(true);
  //   // }
  // }, []);

  if (meLoading | isPending) return "Loading...";

  return (
    <>
      <div>
        <div className="mb-6 flex gap-x-6">
          <div className="relative flex h-[266px] w-8/12 items-center overflow-hidden rounded-2xl px-8 py-5 shadow">
            <div className="relative flex flex-col">
              <span className="text-2xl font-extrabold text-orange-500">
                {`${me.data.firstName} ${me.data.lastName}`} عزیز
              </span>
              <span className="mt-1 text-sm text-gray-800">خوش آمدید</span>
            </div>

            <img
              src="/images/overview/background.png"
              className="absolute inset-0 -z-10 size-full"
            />
          </div>

          <div className="calendar-container w-4/12 overflow-hidden rounded-2xl bg-white shadow">
            <Calendar calendar={persian} locale={persian_fa} shadow={false} />
          </div>
        </div>

        <div className="mb-6 flex gap-x-6">
          <div className="w-4/12 rounded-2xl bg-white px-8 py-5 shadow">
            <span className="text-sm font-bold text-gray-800">
              آمار کاربران سامانه
            </span>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="flex gap-x-6">
                  <span className="text-sm text-gray-500">
                    {data.data.users.active}
                  </span>

                  <div className="flex items-center gap-x-1.5">
                    <span className="block size-1.5 rounded-full bg-green-500"></span>
                    <span className="text-sm text-gray-500">فعال</span>
                  </div>
                </div>

                <div className="mt-4 mr-0.5 flex gap-x-11">
                  <span className="text-sm text-gray-500">
                    {data.data.users.deactive}
                  </span>

                  <div className="flex items-center gap-x-1.5">
                    <span className="block size-1.5 rounded-full bg-red-500"></span>
                    <span className="text-sm text-gray-500">غیرفعال</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-6xl font-bold text-gray-800">
                  {data.data.users.all}
                </span>
                <span className="text-sm font-bold">نفر</span>
              </div>
            </div>
          </div>

          <div className="relative w-8/12 rounded-2xl bg-white px-8 py-8 shadow">
            <span className="text-sm font-bold text-gray-800">
              آمار گروه ها و دسترسی ها
            </span>

            <div className="mt-6 flex gap-x-40">
              <div>
                <span className="text-6xl font-bold text-gray-800">251</span>
                <span className="text-sm font-bold">گروه</span>
              </div>

              <div>
                <span className="text-6xl font-bold text-orange-500">1284</span>
                <span className="text-sm font-bold text-orange-500">
                  دسترسی
                </span>
              </div>
            </div>

            <div className="absolute top-0 left-0 size-44">
              <img
                src="/images/overview/terminal.png"
                alt=""
                className="absolute inset-0 size-full"
              />
            </div>
          </div>
        </div>

        <div className="flex h-24 items-center justify-between rounded-2xl bg-white px-8 shadow">
          <span className="font-bold text-gray-800">
            تعداد نقش ها در سامانه
          </span>

          <div>
            <span className="text-6xl font-bold text-gray-800">397</span>
            <span className="text-sm font-bold">عدد</span>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle className="text-orange-500!">تغییرات اخیر</DialogTitle>

        <DialogBody className="max-h-96 overflow-y-auto">
          <ul role="list" className="space-y-4">
            {Object.entries(JSON.parse(me.data.changeLog[0].changes)).map(
              ([key, value], idx) => (
                <>
                  <li key={idx} className="relative flex gap-x-4">
                    <div className="absolute top-0 right-0 flex h-6 w-6 justify-center">
                      <div className="w-px bg-gray-200" />
                    </div>

                    <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                      <div className="size-1.5 rounded-full bg-orange-500" />
                    </div>

                    <p className="flex-auto text-sm/6 text-gray-500">
                      <span className="font-medium text-gray-900">{key}</span>
                    </p>
                  </li>

                  <ul className="space-y-4">
                    {value.map((item, idx) => (
                      <li key={idx} className="relative flex gap-x-4">
                        <div className="absolute top-0 right-0 flex h-6 w-6 justify-center">
                          <div className="w-px bg-gray-200" />
                        </div>

                        <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                          <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                        </div>

                        <p className="flex-auto text-xs/5 text-gray-500">
                          <span className="text-gray-900">{item}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              ),
            )}
          </ul>
        </DialogBody>

        {/* <DialogActions>
          <Button color="orange" onClick={onRead}>
            متوجه شدم
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}
