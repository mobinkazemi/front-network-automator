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
  //            SWITCHES
  __SWITCHES__ = "/switches",
  SWITCHES_LIST = "/switches/list",
  SWITCHES_CREATE = "/switches/create",
  SWITCHES_UPDATE = "/switches/update/:switchId",
  SWITCHES_TERMINAL = "/switches/terminal/:switchId",
  SWITCHES_CHECK_CONNECTION_STATUS = "/switches/checkConnectionStatus",
  //            Hardening
  SWITCHES_PREPAGES_HARDENING = "/switches/hardening/prePages/:switchId",
  SWITCHES_DETAIL_HARDENING = "/switches/hardening/details/:switchId",
  SWITCHES_CHARTS_HARDENING = "/switches/hardening/charts/:switchId",
  SWITCHES_REPORT_HARDENING = "/switches/hardening/report/:switchId",
}
