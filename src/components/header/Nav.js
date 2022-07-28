import React, { useEffect, useContext } from "react";
import "./Nav.css";
import { UserContext } from "../../context/UserContext";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Nav() {
  const { login, logout } = useContext(UserContext);

  return (
    <nav>
      {login ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/pedir-turno">Pedir Turno</Link>
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
