import cs from "classnames";
import Timeline from "components/common/Timeline";
import ProjectCard from "components/ProjectCard";
import React from "react";
import classes from "./projects.module.scss";

const PROJECTS = [
  {
    company: "CodeLand",
    title: "Martineli Genitto",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    stacks: ["Javascript", "HTML", "SASS", "CSS"],
    link: "https://nothing",
  },
  {
    company: "CodeLand",
    title: "Martineli Genitto",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    stacks: ["Javascript", "HTML", "SASS", "CSS"],
    link: "https://nothing",
  },
  {
    company: "CodeLand",
    title: "Martineli Genitto",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    stacks: ["Javascript", "HTML", "SASS", "CSS"],
    link: "https://nothing",
  },
  {
    company: "CodeLand",
    title: "Martineli Genitto",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    stacks: ["Javascript", "HTML", "SASS", "CSS"],
    link: "https://nothing",
  },
];
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

        <Timeline data={PROJECTS} contentComponent={ProjectCard} />
      </div>
    </div>
  );
};

export default Projects;
