import cs from "classnames";
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

        <div className={cs(classes.content, "margin-top-64")}>
          <div className={classes.educationCard}>
            <div>
              <h1 className={classes.educationDuration}>
                AUGUST 2016 - AUGUST 2028
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
                Attended the University of Rwanda, for Bachelor's of computer
                and software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalBackground;
