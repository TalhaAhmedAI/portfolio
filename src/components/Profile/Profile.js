import { Typography } from "@material-ui/core";
import React from "react";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Talha</Typography>
        <Typography className="name">Talha</Typography>
      </div>
      <figure className="profile_image">
        <img src="" />
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
