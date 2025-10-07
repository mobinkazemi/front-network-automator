import { NavLink } from "react-router";
import {
  ArrowRightEndOnRectangleIcon,
  CubeIcon,
  FireIcon,
  IdentificationIcon,
  KeyIcon,
  ServerIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

import { useMeQuery, useLogout } from "@/actions/user";

// ----------------------------------------------------------------------

const navigation = [
  { name: "پیشخوان", href: "", icon: CubeIcon, current: false },
  { name: "کاربران", href: "user", icon: UsersIcon, current: false },
  {
    name: "مدیریت نقش ها",
    href: "role",
    icon: IdentificationIcon,
    current: false,
  },
  {
    name: "مدیریت دسترسی ها",
    href: "permission",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "مدیریت دستگاه ها",
    href: "device",
    icon: ServerIcon,
    current: false,
  },
  {
    name: "تغذیه ها و تامین کنندگان",
    href: "feed",
    icon: FireIcon,
    current: false,
  },
];

// ----------------------------------------------------------------------

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ----------------------------------------------------------------------

export const DashboardLayout = ({ children }) => {
  const { me, meLoading } = useMeQuery();
  const { logout } = useLogout();

  if (meLoading) return "Loading...";

  return (
    <>
      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex shrink-0 items-center pt-10">
              <img
                alt="Your Company"
                src="/images/logo.png"
                className="mx-auto h-20 w-auto"
              />
            </div>

            <div className="mt-2 rounded-2xl bg-gray-100 p-4">
              <div className="flex items-center gap-x-3">
                <span className="inline-block size-11 shrink-0 overflow-hidden rounded-full border-2 border-orange-500 bg-orange-100">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-full text-orange-300"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>

                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">
                    {`${me.data.firstName} ${me.data.lastName}`}
                  </span>

                  <span className="mt-1 text-xs text-gray-500">
                    {me.data.email}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex h-9 items-center justify-center rounded-xl bg-orange-100 text-sm font-bold text-orange-500">
                ادمین کل
              </div>
            </div>

            <nav className="mt-4 flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-500 hover:bg-gray-50 hover:text-orange-500",
                            "group flex gap-x-3 rounded-2xl p-2 text-sm/6",
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-orange-500",
                              "size-6 shrink-0",
                            )}
                          />
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <button
                    className="group -mx-2 flex w-full gap-x-3 rounded-2xl p-2 text-sm/6 text-gray-500 hover:bg-gray-50 hover:text-orange-500"
                    onClick={logout}
                  >
                    <ArrowRightEndOnRectangleIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-orange-500"
                    />
                    خروج از حساب کاربری
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <main className="py-10 lg:pr-72">
          <div className="mx-auto max-w-7xl px-8">{children}</div>
        </main>
      </div>
    </>
  );
};
