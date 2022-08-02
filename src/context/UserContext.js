import React, { createContext, useState, useEffect } from "react";
import harcodeUsers from "../hooks/harcodeUsers";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export const UserContext = createContext(null);

const UserProvider = (props) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3050/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
        console.log(response.data.user[0].role);
        console.log(response.data);
      }
    });
  }, []);

  console.log(login);
  console.log(username);
  console.log(role);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
  }, []);

  const logout = () => {
    setLogin(false);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        setLogin,
        user,
        setUser,
        username,
        setUserame,
        password,
        setPassword,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
