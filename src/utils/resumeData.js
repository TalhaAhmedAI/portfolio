import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const resumeData = {
  name: "Talha Ahmed",
  title: "MERN Stack Developer",
  email: "talhaahmed080@gmail.com",
  phone: "+923224652829",

  socials: {
    facebook: {
      link: "https://www.facebook.com/profile.php?id=100008266472683",
      text: "facebook",
      icon: <FacebookIcon />,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/talha-ahmed-233b03165/",
      text: "Linkedin",
      icon: <LinkedInIcon />,
    },
    github: {
      link: "https://github.com/TalhaAhmedAI",
      text: "Github",
      icon: <GitHubIcon />,
    },
  },
};

export default resumeData;
