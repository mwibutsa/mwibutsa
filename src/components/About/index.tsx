import ProfilePic from "assets/images/Profile.png";
import cs from "classnames";
import Button from "components/common/Button";
import React from "react";
import classes from "./about.module.scss";
const About = () => {
  return (
    <div className={cs(classes.About, "padding-top-64 padding-bottom-64")}>
      <div className={cs(classes.content, "container-default")}>
        <div className={classes.imageContent}>
          <div className={classes.imageBackgroundLayer1}>
            <img src={ProfilePic} alt="" />
          </div>
        </div>
        <div className={classes.textContent}>
          <h1 className={cs("title-introduction")}>Hello,</h1>
          <h1 className={cs("title-introduction")}>I’m Mwibutsa</h1>
          <h1 className={cs("title-introduction")}>Floribert</h1>
          <p
            className={cs(
              "margin-bottom-32 margin-top-32",
              classes.professionalSummary
            )}
          >
            Meet Mwibutsa Floribert, a full-stack software engineer and a
            natural team player with both remote and onsite experience. He has 5
            years of experience in building web and mobile applications using
            Python, Django, Javascript, Typescript, Nodejs, React, React-native,
            and UI/UX design.
            <br />
            <br />
            In addition to his experience, he has practical knowledge about
            DevOps, most specifically deployment, containerization with Docker,
            unit test, integration test, automated test, and using popular tools
            to connect development teams.
            <br />
            <br />
            In fact, He can be part of any technical department including but
            not limited to Backend, Frontend, UI/UX Design, and DevOps.
          </p>
          <Button className="btn--primary btn--big" onClick={() => {}}>
            <a
              href="https://drive.google.com/file/d/1TdHqg3UFnUOEORlbK0abG0_ZzIcqV2bk/view?usp=sharing"
              download
            >
              View my cv
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
