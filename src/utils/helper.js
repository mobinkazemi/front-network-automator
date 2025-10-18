import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ----------------------------------------------------------------------

export const setCookie = (tokens) => {
  document.cookie = `token=${tokens.token}; max-age=${1 * 24 * 60 * 60}`;

  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}`;
};

// ----------------------------------------------------------------------

export const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((token) => token.split("=")[0] === cookieName)
    ?.split("=")[1];
};

// ----------------------------------------------------------------------

// export const removeCookies = () => {
//   document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;

//   document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
// };

// ----------------------------------------------------------------------

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
