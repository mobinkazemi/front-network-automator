export enum ROUTES_ENUM {
  HOME = "/",

  //
  //
  //
  // ####################################
  //            AUTH
  LOGIN = "/login",
  REGISTER = "/register",

  //
  //
  //
  // ####################################
  //            Hardening & CIS
  __CIS__ = "/cis",
  CIS_LIST = "/cis/list",
  CIS_CREATE = "/cis/create",
  CIS_UPDATE = "/cis/update",
  CIS_INFO = "/cis/info",
  CIS_DELETE = "/cis/delete",

  __CATEGORY__ = "/category",
  CATEGORY_LIST = "/category/list",
  CATEGORY_CREATE = "/category/create",
  CATEGORY_UPDATE = "/category/update",
  CATEGORY_INFO = "/category/info",
  CATEGORY_DELETE = "/category/delete",

  __HARDENING__ = "/hardening",
  HARDENING_LIST = "/hardening/list",
  HARDENING_CREATE = "/hardening/create",
  HARDENING_UPDATE = "/hardening/update",
  HARDENING_INFO = "/hardening/info",
  HARDENING_DELETE = "/hardening/delete",
  //
  //
  //
  // ####################################
  //            SWITCHES
  __SWITCHES__ = "/switches",
  SWITCHES_LIST = "/switches/list",
  SWITCHES_CREATE = "/switches/create",
  SWITCHES_UPDATE = "/switches/update/:switchId",
  SWITCHES_TERMINAL = "/switches/terminal/:switchId",
  SWITCHES_CHECK_CONNECTION_STATUS = "/switches/checkConnectionStatus",
  //            SWITCHES -> HARDENING
  SWITCHES_PREPAGES_HARDENING = "/switches/hardening/prePages/:switchId",
  SWITCHES_DETAIL_HARDENING = "/switches/hardening/details/:switchId",
  SWITCHES_CHARTS_HARDENING = "/switches/hardening/charts/:switchId",
  SWITCHES_REPORT_HARDENING = "/switches/hardening/report/:switchId",
}
