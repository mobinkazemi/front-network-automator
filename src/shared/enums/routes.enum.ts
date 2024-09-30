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
}
