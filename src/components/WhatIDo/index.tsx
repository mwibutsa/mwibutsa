import BackenddIcon from 'assets/images/backend-icon.svg';
import FrontendIcon from 'assets/images/frontend-icon.svg';
import MobileAppIcon from 'assets/images/mobile-app-icon.svg';
import cs from 'classnames';
import classes from './what-i-do.module.scss';

const WhatIDo = () => {
  return (
    <div
      className={cs(
        'container-default padding-top-100 padding-bottom-100',
        classes.WhatIDo
      )}
    >
      <h1 className='title-block'>What I do</h1>
      <div className={classes.content}>
        <div className={cs(classes.cards, 'margin-top-64 margin-bottom-64')}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={FrontendIcon} alt='' />
            </div>
            <h1 className={classes.cardTitle}>Frontend development</h1>
            <p className={classes.cardDescription}>
              Front End UI Developer with 5 years of experience in design,
              analysis, development, and testing of User Interface framework in
              various web-based applications.
            </p>
            <div className={classes.techStacks}>
              {[
                'Javascript',
                'Typescript',
                'React',
                'HTML/HTML5',
                'CSS/CSS3',
                'SASS',
                'Quality assurance',
                'Next.js',
                'GraphQL',
                'Apollo',
                'Api integration',
              ].map((stack) => (
                <span key={stack} className={classes.techStack}>
                  {stack}
                </span>
              ))}
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={BackenddIcon} alt='' />
            </div>
            <h1 className={classes.cardTitle}>Backend development</h1>
            <p className={classes.cardDescription}>
              Software Application Developer with 5 years of experience in
              backend application development with cutting-edge technologies.
              Focused primarily on developing APIs for mobile and web
              applications.
            </p>
            <div className={classes.techStacks}>
              {[
                'Javascript',
                'Typescript',
                'Nodejs',
                'Express',
                'Python',
                'Django',
                'GraphQL',
                'Apollo',
                'MongoDB',
                'PostgreSQL',
                'MySQL',
                'Micro-services',
              ].map((stack) => (
                <span key={stack} className={classes.techStack}>
                  {stack}
                </span>
              ))}
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={MobileAppIcon} alt='' />
            </div>
            <h1 className={classes.cardTitle}>Mobile application</h1>
            <p className={classes.cardDescription}>
              Highly motivated Mobile Application Developer with 3 years of
              experience in cross platform mobile application development (ios &
              android) with React-native.
            </p>

            <div className={classes.techStacks}>
              {[
                'React-native',
                'Javascript',
                'Typescript',
                'Api integration',
              ].map((stack) => (
                <span key={stack} className={classes.techStack}>
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.textContent}>
          <h1 className='title-block'>Why should you hire me?</h1>
          <p>
            I am a quality-oriented professional who has been consistently
            praised as hard-working by my co-workers and management. Throughout
            my career,I have consistently demonstrated technical, teamwork,
            leadership, and problem-solving abilities in every aspect of my
            Software engineer role. After reviewing my resume, I hope you will
            agree that I am the type of competent and competitive candidate you
            need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
