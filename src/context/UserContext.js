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
  const [user1, setUser1] = useState({
    username:'',
    email:'',
    role:'VISITOR',
  }); 


  // console.log(login);
  // console.log(username);
  // console.log(role);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.stringify(loggedInUser);
  //     setUser(foundUser);
  //     console.log(foundUser);
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
        user1,
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
