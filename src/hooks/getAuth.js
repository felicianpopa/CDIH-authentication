import React from "react";
import { useCookies } from "react-cookie";

const GetAuth = () => {
  const [cookies] = useCookies(["bitUser"]);
  const userCookies = cookies["bitUser"];
  return userCookies;
};

export { GetAuth };
