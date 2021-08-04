import React from "react";
import { Typography } from "@material-ui/core";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

import resumeData from "../../utils/resumeData";
import picture from "../../assets/images/picture.jpg";

import "./Profile.css";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography>
          <span>{title}:</span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography>
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const { name, title } = resumeData;

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{name}</Typography>
        <Typography className="title">{title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={picture} alt="Talha" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
        </CustomTimeline>
        <br />
        <button>Download</button>
      </div>
    </div>
  );
};

export default Profile;
