import React from "react";

function Dashboard(user) {
  return (
    <div>
      <h1>Bienvenido, {user.name}</h1>
    </div>
  );
}

export default Dashboard;
