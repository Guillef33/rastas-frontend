import React, { useContext } from 'react'

// Protege las rutas a traves de un condicional
import { UserContext } from "../context/UserContext";

import Home from '../pages/Home'


const PrivateRoute = (props) => {

 const {login} = useContext(UserContext);
  // Podemos agregar un componente para el false, toast o alert
  // En el true pasamos todas las rutas
  return login ? props.children : <Home />
}

export default PrivateRoute