import LinkArrow from "assets/images/link-arrow.svg";
import cs from "classnames";
import React from "react";
import classes from "./projects.module.scss";

const Projects = () => {
  return (
    <div className={cs(classes.Projects)}>
      <div
        className={cs(
          classes.ProjectsInner,
          "margin-top-100 margin-bottom-100 container-default"
        )}
      >
        <h1 className="title-block">Projects I worked on</h1>

        <div className={cs(classes.projectCards)}>
          <div className={cs(classes.card)}>
            <div className={cs(classes.cardImg)}></div>

            <div className={cs(classes.cardContent)}>
              <h1 className={cs("margin-bottom-16 title-block")}>2UMoney</h1>
              <p className={cs("margin-bottom-24", classes.projectDescription)}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </p>

              <a href="#." className={cs(classes.projectLink)}>
                <img src={LinkArrow} alt="" /> Visit project
              </a>
            </div>
          </div>

          <div className={cs(classes.card)}>
            <div className={cs(classes.cardImg)}></div>

            <div className={cs(classes.cardContent)}>
              <h1 className={cs("margin-bottom-16 title-block")}>M2U</h1>
              <p className={cs("margin-bottom-24", classes.projectDescription)}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </p>

              <a href="#." className={cs(classes.projectLink)}>
                <img src={LinkArrow} alt="" /> Visit project
              </a>
            </div>
          </div>

          <div className={cs(classes.card)}>
            <div className={cs(classes.cardImg)}></div>

            <div className={cs(classes.cardContent)}>
              <h1 className={cs("margin-bottom-16 title-block")}>SPARXS</h1>
              <p className={cs("margin-bottom-24", classes.projectDescription)}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </p>

              <a href="#." className={cs(classes.projectLink)}>
                <img src={LinkArrow} alt="" /> Visit project
              </a>
            </div>
          </div>

          <div className={cs(classes.card)}>
            <div className={cs(classes.cardImg)}></div>

            <div className={cs(classes.cardContent)}>
              <h1 className={cs("margin-bottom-16 title-block")}>
                Martineli Ginetto
              </h1>
              <p className={cs("margin-bottom-24", classes.projectDescription)}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </p>

              <a href="#." className={cs(classes.projectLink)}>
                <img src={LinkArrow} alt="" /> Visit project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
