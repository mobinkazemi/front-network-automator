import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    subheader: 'مدیریت',
    items: [
      // { title: 'پیشخوان', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: 'کاربران', path: paths.dashboard.user.root, icon: ICONS.user },
      { title: 'مدیریت نقش ها', path: paths.dashboard.role.root, icon: ICONS.lock },
      { title: 'مدیریت دسترسی ها', path: paths.dashboard.permission.root, icon: ICONS.analytics },
      // { title: 'مدیریت دستگاه ها', path: paths.dashboard.three, icon: ICONS.analytics },
      // { title: 'تنظیمات سامانه', path: paths.dashboard.three, icon: ICONS.analytics },
    ],
  },
  {
    items: [
      {
        title: 'فایروال',
        path: paths.dashboard.feed.root,
        icon: ICONS.user,
        children: [{ title: 'تغذیه ها و تأمین کنندگان', path: paths.dashboard.feed.root }],
      },
    ],
  },
];
