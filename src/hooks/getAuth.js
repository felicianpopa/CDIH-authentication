import { parseCookies } from "nookies";

const GetAuth = (ctx = null) => {
  const cookies = parseCookies(ctx);
  let userCookies = null;

  if (cookies.bitUser) {
    try {
      userCookies = JSON.parse(cookies.bitUser);
    } catch (error) {
      console.error("Error parsing user cookie:", error);
    }
  }

  return userCookies;
};

export { GetAuth };
