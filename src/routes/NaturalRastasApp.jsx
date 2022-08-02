import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Header from "../components/nav/Nav";
import Profile from "../components/profile/profile";
import Home from "../pages/Home";

import Dashboard from "../components/dashboard/Dashboard";
import NuevoTurno from '../components/turnos/NuevoTurno';
import Admin from '../pages/Admin';

// Aca van a ir las rutas de la aplicacion, todo lo que queremos mostrar cunado el usuario esta logeado

const NaturalRastasApp = () => {
  return (
    <>
        <Header />
    
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/pedir-turno" element={<NuevoTurno />}></Route>
          <Route path="/admin" element={<Admin />}></Route>


        </Routes>

        {/* Acá va el footer */}
    </>
  )
}

export default NaturalRastasApp