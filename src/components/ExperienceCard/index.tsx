import React from 'react';
import './experience-card.scss';

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
      <div className='experience-card__timeline timeline__timeline'>
        {duration}
      </div>
      <div className='experience-card'>
        <h2 className='title2 experience-card__job-title'>{jobTitle}</h2>
        <h3 className='title3 experience-card__company'>{company}</h3>
        {Array.isArray(description) ? (
          <ul className='responsibilities'>
            {description.map((item) => (
              <li key={item} className='responsibilities__item'>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className='experience-card__description'>{description}</p>
        )}
        <div className='experience-card__stacks'>
          {stacks.map((language) => (
            <span key={language} className='experience-card__stack'>
              {language}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
