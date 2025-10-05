import { useMeQuery } from "@/actions/user";

import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import axiosInstance from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

// ----------------------------------------------------------------------

const get = async () => {
  const response = await axiosInstance.get("/home/numeric-reports");
  return response.data;
};

// ----------------------------------------------------------------------

export function OverviewView() {
  const { me, meLoading } = useMeQuery();

  const { data, isPending } = useQuery({
    queryKey: ["numeric-reports"],
    queryFn: get,
  });

  console.log(data);

  if (meLoading | isPending) return "Loading...";

  return (
    <div>
      <div className="mb-6 flex gap-x-6">
        <div className="relative flex h-[266px] w-8/12 items-center overflow-hidden rounded-2xl bg-white px-8 py-5 shadow">
          <div className="z-50 flex flex-col">
            <span className="text-2xl font-extrabold text-orange-500">
              {`${me.data.firstName} ${me.data.lastName}`} عزیز
            </span>
            <span className="mt-1 text-sm text-gray-800">خوش آمدید</span>
          </div>

          <img
            src="/images/overview/background.png"
            className="absolute inset-0 size-full"
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
              <span className="text-sm font-bold text-orange-500">دسترسی</span>
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
        <span className="font-bold text-gray-800">تعداد نقش ها در سامانه</span>

        <div>
          <span className="text-6xl font-bold text-gray-800">397</span>
          <span className="text-sm font-bold">عدد</span>
        </div>
      </div>
    </div>
  );
}
