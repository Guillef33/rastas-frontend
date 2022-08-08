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
    login,
    username,
    setUserame,
    password,
    setPassword,
    userInDB,
    user1
  } = useContext(UserContext);

  const [role, setRole] = useState("");
  // const { role } = user1;

  useEffect(() => {
    Axios.get("http://localhost:3050/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
        console.log(response.data.user[0].role);
        console.log(response.data);
      }
    });
  }, []);

  console.log(role);

  return (
    <div>
      {role === "visitor" && <Visitor />}
      {role === "admin" && <Admin role={role} setRole={setRole} />}
      {role === "modeator" && <Moderator />}
    </div>
  );
}

export default Dashboard;
