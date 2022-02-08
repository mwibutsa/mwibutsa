import React from "react";
import "./project-card.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  stacks: string[];
  company: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  stacks,
  company,
  link,
}) => {
  return (
    <>
      <div className="project-card__timeline timeline-timeline">{company}</div>
      <div className="project-card">
        <h2 className="title2 project-card__tile">{title}</h2>
        <p className="project-card__description">{description}</p>
        <div className="project-card__stacks">
          {stacks.map((language) => (
            <span key={language} className="project-card__stack">
              {language}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
        >
          View project
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
