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
    role,
    setRole
  } = useContext(UserContext);


  return (
    <div>
      {role === "visitor" && <Visitor />}
      {role === "admin" && <Admin role={role} setRole={setRole} />}
      {role === "modeator" && <Moderator />}
    </div>
  );
}

export default Dashboard;
