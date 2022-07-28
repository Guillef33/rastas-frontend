import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Login from "../components/login/Login";
import Register from '../components/register/Register'
  
// Para cualquier ruta, mostramos el path '*' y con un componente Login que redirige a /login

const AuthRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />} />

        {/*Si no estoy logueado me mando a login siempre*/}
        <Route path='*' element={<Login to="login" />}/>

    </Routes>
  )
}

export default AuthRouter