import React, { useState, useEffect } from "react";

import './profile.css'

import Users from "../../hooks/users";
import noProfile from "../../assets/no-profile-img.jpg";

function Profile() {


  return (
    <div className="profile-container">
      <div className="profile-data">
          <Users  />
      </div>
    </div>
  );
}

export default Profile;
