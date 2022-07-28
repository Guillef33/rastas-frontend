import React, { useCallback, useContext } from "react";
import Context from "../context/UserContext";

import users from "./users";
import harcodeUsers from "./harcodeUsers";

function useUser() {
  const [jwt, setJWT] = useContext(Context);
  const [register, setRegister] = useContext(Context);

  const login = useCallback(
    ({ username, password }) => {
      setJWT("test");
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  const userMap = () => {
    harcodeUsers.map((element) => {
      console.log(element.username);
    });
  };

  const registerUser = useCallback(
    ({ username, password, email, age }) => {
      setJWT("test");
    },
    [setJWT]
  );

  return {
    isLogged: Boolean(jwt),
    isRegister: Boolean(register),
    login,
    logout,
    userMap,
    registerUser,
  };
}

export default useUser;
