import Cookies from "js-cookie";

const TOKEN_KEY = "token";

export const tokenStorage = {
  get: () => Cookies.get(TOKEN_KEY),
  set: (token: string) =>
    Cookies.set(TOKEN_KEY, token, {
      expires: 7, // days
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    }),
  remove: () => Cookies.remove(TOKEN_KEY),
};
