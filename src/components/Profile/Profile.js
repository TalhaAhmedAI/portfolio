import React from "react";
import { Typography } from "@material-ui/core";

import "./Profile.css";
import picture from "../../assets/images/picture.jpg";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Talha</Typography>
        <Typography className="title">Title</Typography>
      </div>
      <figure className="profile_image">
        <img src={picture} alt="Talha" />
      </figure>
      <div className="profile_information">
        Insert Timeline
        <br />
        <button>Download</button>
      </div>
    </div>
  );
};

export default Profile;
