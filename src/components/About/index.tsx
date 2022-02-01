import ProfilePic from "assets/images/Profile.png";
import cs from "classnames";
import Button from "components/Button";
import React from "react";
import classes from "./about.module.scss";
const About = () => {
  return (
    <div className={cs(classes.About, "padding-top-64 padding-bottom-64")}>
      <div className={cs(classes.content, "container-default")}>
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
            I am a full-stack software engineer and a natural team player with
            both remote and onsite experience. I Have experience in building web
            and mobile applications using Python Django, Nodejs, React,
            React-native, and UI/UX design.
          </p>
          <Button className="btn--primary btn--big" onClick={() => {}}>
            Get my cv
          </Button>
        </div>
        <div className={classes.imageContent}>
          <div className={classes.imageBackgroundLayer1}>
            <div className={classes.imageBackgroundLayer2}>
              <img src={ProfilePic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
