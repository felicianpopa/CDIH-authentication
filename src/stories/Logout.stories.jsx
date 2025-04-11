import React, { useState } from "react";
import { useLogout } from "../hooks";

export default {
  title: "Log out",
  component: useLogout,
};

export const App = () => {
  const [logoutStatus, setLogoutStatus] = useState(null);
  const logOut = useLogout("http://localhost:8080");
  const handleClick = async () => {
    try {
      await logOut();
      setLogoutStatus("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
      setLogoutStatus(`Logout failed, ${error.response.data.message}`);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Log out</button>
      {logoutStatus && <p>{logoutStatus}</p>}
    </div>
  );
};
