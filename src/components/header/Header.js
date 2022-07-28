import React, { useEffect } from "react";
import "./Header.css";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import useUser from "../../hooks/useUser";

function Header() {
  //   const isLogged = false;

  const { isLogged, login, logout, userMap } = useUser();

    useEffect(() => {
        userMap();
    }, [])

  return (
    <header>
      {isLogged ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/history">History</Link>
          <Link to="/publish">Publish</Link>
          <Link to="/" onClick={logout}>LogOut</Link>
        </>
      ) : (
        <Link to="/login">Inicia Sesion</Link>
      )}
    </header>
  );
}

export default Header;
