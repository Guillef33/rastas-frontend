import React, { useEffect, useContext } from "react";
import "./Nav.css";
import { UserContext } from "../../context/UserContext";

import Axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Nav() {
  const { login, logout, role, setRole } = useContext(UserContext);

  console.log(role);

  return (
    <nav>
      {login ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/pedir-turno">Pedir Turno</Link>
          {role === "admin" && <Link to="/admin">Admin</Link>}
          <Link to="/admin">Admin</Link>
          <Link to="/" onClick={logout}>
            LogOut
          </Link>
        </>
      ) : (
        <Link to="/login">Inicia Sesion</Link>
      )}
    </nav>
  );
}

export default Nav;
