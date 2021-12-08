import { makeStyles } from "@mui/styles";

import githubLogo from "../assets/githubLogo.svg";

const useStyles = makeStyles((theme) => ({
  fixedBottomRight: {
    position: "fixed",
    bottom: 0,
    right: 0,
    width: 40,
    margin: 20,
    transition: "all 0.2s ease",
    zIndex: 999,
    cursor: "pointer",
  },
}));

const GitHubLink = () => {
  const classes = useStyles();
  return (
    <a href="https://github.com/chefnoname/daye_project" target="_blank">
      <img
        className={classes.fixedBottomRight}
        src={githubLogo}
        alt="GitHub repository"
        title="GitHub repository"
      />
    </a>
  );
};

export default GitHubLink;
