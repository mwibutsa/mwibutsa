import React from 'react';
import classes from './service-card.module.scss';

interface IServiceCardProps {
  service: {
    title: string;
    ServiceIcon: string;
    description: string;
    skills: string[];
  };
}
const ServiceCard: React.FC<IServiceCardProps> = ({
  service: { ServiceIcon, title, description, skills },
}) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <img src={ServiceIcon} alt='' />
        </div>
        <h1 className={classes.cardTitle}>{title}</h1>
        <p className={classes.cardDescription}>{description}</p>
        <div className={classes.techStacks}>
          {skills.map((stack) => (
            <span key={stack} className={classes.techStack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
