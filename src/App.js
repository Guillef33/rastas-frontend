import React from "react";
import UserProvider from "./context/UserContext";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
