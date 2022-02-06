import cs from "classnames";
import React from "react";
import classes from "./educational-background.module.scss";
const EducationalBackground = () => {
  return (
    <div
      className={cs(
        classes.EducationalBackground,
        "padding-bottom-100 padding-top-100"
      )}
    >
      <div
        className={cs(classes.EducationalBackgroundInner, "container-default")}
      >
        <h1 className="title-block">Educational background</h1>

        <div className={classes.content}>
          <div className={classes.educationCard}>
            <div>
              <h1 className={classes.educationDuration}>
                AUGUST 2016 - APRIL 2020
              </h1>
              <h1
                className={cs(
                  classes.educationTitle,
                  classes.educationDegree,
                  "margin-bottom-16 text-center"
                )}
              >
                (Bachelor's)
              </h1>
            </div>
            <div className={classes.educationContent}>
              <h1
                className={cs(classes.educationInstitution, "margin-bottom-8")}
              >
                University of Rwanda
              </h1>
              <h1 className={cs(classes.educationTitle, "margin-bottom-16")}>
                Computer & Software engineering
              </h1>
              <p className={classes.educationDescription}>
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

export default EducationalBackground;
