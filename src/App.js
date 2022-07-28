import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/profile/profile";

import Dashboard from "./components/dashboard/Dashboard";
import Home from "./pages/Home";

import { UserContextProvider } from "./context/UserContext";
import Header from "./components/header/Header";

function App() {
  // const [user, setUser] = useState("");

  return (
    <UserContextProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
