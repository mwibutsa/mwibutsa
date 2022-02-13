import React from "react";
import "./experience-card.scss";

interface ExperienceCardProps {
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
      <div className="experience-card__timeline timeline__timeline">
        {duration}
      </div>
      <div className="experience-card">
        <h2 className="title2 experience-card__company">{company}</h2>
        <h3 className="title3 experience-card__job-title">{jobTitle}</h3>
        <p className="experience-card__description">{description}</p>
        <div className="experience-card__stacks">
          {stacks.map((language) => (
            <span key={language} className="experience-card__stack">
              {language}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;