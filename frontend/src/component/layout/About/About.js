import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import photo from "../../../images/reason.jpeg";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={photo}
              alt="Founder"
            />
            <Typography>Md.Rahadul Haq</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Linked In
            </Button>
            <span>
              This is Md.Rahadul Haq. I am a full stack developer. I am working
              with MERN technology nearly one year.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">You are Humbly Invited</Typography>
            <a
              href="https://www.youtube.com/channel/UCV6QbYkBvqgwdETpm5hlFVQ"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://www.linkedin.com/in/rahadul-haq-4047501a3/"
              target="blank"
            >
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
