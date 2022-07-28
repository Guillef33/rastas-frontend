import React, { useState, useEffect } from "react";
import harcodeUsers from "./harcodeUsers";

function Users() {
  const [users, setUsers] = useState([harcodeUsers]);

  console.log(harcodeUsers);

  return (
    <>
      {harcodeUsers.map((user) => (
        <>
          <div>
            <img src={user.image} alt="profile-pic" />
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.email}</p>
          </div>
          <div>{user.bio}</div>
        </>
      ))}
    </>
  );
}

export default Users;
