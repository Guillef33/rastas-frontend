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
  const [email, setEmail] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  // let navigate = useNavigate();

  // Axios.defaults.withCredentials = true;

  // const [error, setError] = useState("");

  // const loginWeb = (e) => {
  //   e.preventDefault();
  //   Axios.post("http://localhost:3050/login", {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //       setLogin(true);
  //       navigate("/dashboard");
  //     }

  //     console.log(response.data);
  //   });
  // };

  // useEffect(() => {
  //   Axios.get("http://localhost:3050/login").then((response) => {
  //     console.log(response);
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].username);
  //       // setLogin(true);
  //       // navigate("/dashboard");
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(username, password);
  //   localStorage.setItem("user", JSON.stringify(user));
  //   localStorage.setItem("password", JSON.stringify(password));
  //   localStorage.setItem("login", JSON.stringify(login));
  //   if ((user, login)) {
  //     localStorage.getItem("user");
  //     localStorage.getItem("login");
  //   }
  // }, []);

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
