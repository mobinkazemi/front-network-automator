import {
  ArrowLeftStartOnRectangleIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "../components/sidebar";
import { Navbar } from "../components/navbar";
import { SidebarLayout } from "../components/sidebar-layout";

// ----------------------------------------------------------------------

export const DashboardLayout = ({ children }) => {
  return (
    <SidebarLayout
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="bg-red-500 rounded-2xl p-4">
              <div className="rounded-xl bg-orange-100 text-orange-500 font-bold text-sm h-9 flex justify-center items-center">
                ادمین کل
              </div>
            </div>
          </SidebarHeader>

          <SidebarBody>
            {/* <div className="mb-2 flex">
              <Link href="#" aria-label="Home">
                <Logo />
              </Link>
            </div> */}

            <SidebarSection>
              <SidebarItem href="/" current>
                <ServerIcon />
                <SidebarLabel>مدیریت دستگاه ها</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSpacer />

            <SidebarSection>
              <SidebarItem href="/logout">
                <ArrowLeftStartOnRectangleIcon />
                <SidebarLabel>خروج از حساب کاربری</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
    >
      {children}
    </SidebarLayout>
  );
};
