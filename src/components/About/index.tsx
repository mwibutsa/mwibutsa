import ProfilePic from "assets/images/Profile.png";
import cs from "classnames";
import Button from "components/common/Button";
import React from "react";
import classes from "./about.module.scss";
const About = () => {
  return (
    <div className={cs(classes.About, "padding-top-64 padding-bottom-64")}>
      <div className={cs(classes.content, "container-default")}>
        <div className="">
          <div className={classes.imageContent}>
            <div className={classes.imageBackgroundLayer1}>
              <img src={ProfilePic} alt="" />
            </div>
          </div>
          <div className={classes.onlineProfile}>
            <span className={classes.onlineProfileLink}>
              <a
                href="https://github.com/mwibutsa"
                target="_blank"
                rel="noreferrer"
                className="text--white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </span>
            <span className={classes.onlineProfileLink}>
              <a
                className="text--white"
                href="https://www.linkedin.com/in/mwibutsa/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </span>
            <span className={classes.onlineProfileLink}>
              <a
                href="https://stackoverflow.com/users/11440526/mwibutsa-floribert"
                target="_blank"
                rel="noreferrer"
                className="text--white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                </svg>
              </a>
            </span>
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
              target="_blank"
              rel="noreferrer"
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
