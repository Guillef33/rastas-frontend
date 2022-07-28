import React, { useContext, useState, useEffect } from "react";

import { UserContext } from "../../context/UserContext";
import Axios from "axios";
import Visitor from "../roles/Visitor";
import Admin from "../roles/Admin";
import Moderator from "../roles/Moderator";

function Dashboard() {
  const {
    user,
    setUser,
    username,
    setUserame,
    password,
    setPassword,
    userInDB,
  } = useContext(UserContext);

  const [role, setRole] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3050/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      {role === "visitor" && <Visitor />}
      {role === "admin" && <Admin />}
      {role === "modeator" && <Moderator />}

      {/* <h1>
        Bienvenido, {username} {role}
      </h1> */}
    </div>
  );
}

export default Dashboard;
