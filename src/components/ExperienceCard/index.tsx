import React from "react";
import "./experience-card.scss";

interface ExperienceCardProps {
  title: string;
  description: string;
  stacks: string[];
  duration: string;
  company: string;
  jobTitle: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  description,
  stacks,
  duration,
  company,
  jobTitle,
}) => {
  return (
    <>
      <div className="timeline-timeline">{duration}</div>
      <div className="experience-card">
        <h2 className="title2 experience-card__tile">{company}</h2>
        <h3 className="title3">{jobTitle}</h3>
        <p className="experience-card__description">{description}</p>
        <div className="experience-card__footer">
          {stacks.map((language) => (
            <span className="experience-card__stack">{language}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
