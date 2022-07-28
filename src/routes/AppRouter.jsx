import React from 'react';
import AuthRouter from './AuthRouter';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NaturalRastasApp from './NaturalRastasApp';
import PrivateRoute from './PrivateRoute';

// Rutas Padres y Rutas Hijas

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='auth/*' element={ <AuthRouter /> } />

            <Route path='/*' element={ 
                
                <PrivateRoute>
                    <NaturalRastasApp />
                </PrivateRoute>

             }/>

         
        </Routes>
    </Router>
  )
}

export default AppRouter