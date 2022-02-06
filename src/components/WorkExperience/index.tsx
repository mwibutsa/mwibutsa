import cs from "classnames";
import React from "react";
import classes from "./work-experience.module.scss";
const WorkExperience = () => {
  return (
    <div className={classes.WorkExperience}>
      <div
        className={cs(
          classes.WorkExperienceContent,
          "padding-top-100 padding-bottom-100 container-default"
        )}
      >
        <h1 className="title-block">Work experience</h1>
        <div className={cs(classes.content)}>
          <div className={classes.jobCard}>
            <h1 className={classes.jobDuration}>JANUARY 2022 - PRESENT</h1>
            <div className={classes.jobContent}>
              <h1 className={cs(classes.jobCompany, "margin-bottom-8")}>
                CodeLand
              </h1>
              <h1 className={cs(classes.jobTitle, "margin-bottom-16")}>
                Frontend engineer
              </h1>
              <p className={classes.jobDescription}>
                I am a full-stack software engineer and a natural team player
                with both remote and onsite experience.
              </p>
            </div>
          </div>

          <div className={classes.jobCard}>
            <h1 className={classes.jobDuration}>AUGUST 2028 - APRIL 2020</h1>
            <div className={classes.jobContent}>
              <h1 className={cs(classes.jobCompany, "margin-bottom-8")}>
                Andela
              </h1>
              <h1 className={cs(classes.jobTitle, "margin-bottom-16")}>
                Associate software engineer
              </h1>
              <p className={classes.jobDescription}>
                I am a full-stack software engineer and a natural team player
                with both remote and onsite experience.
              </p>
            </div>
          </div>

          <div className={classes.jobCard}>
            <h1 className={classes.jobDuration}>JANUARY 2017 - AUGUST 2018</h1>
            <div className={classes.jobContent}>
              <h1 className={cs(classes.jobCompany, "margin-bottom-8")}>
                Quick tech Rwanda
              </h1>
              <h1 className={cs(classes.jobTitle, "margin-bottom-16")}>
                Software engineer
              </h1>
              <p className={classes.jobDescription}>
                I am a full-stack software engineer and a natural team player
                with both remote and onsite experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
