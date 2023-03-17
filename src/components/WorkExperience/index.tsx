import cs from 'classnames';
import Timeline from 'components/common/Timeline';
import ExperienceCard from 'components/ExperienceCard';
import classes from './work-experience.module.scss';

const EMPLOYMENTS = [
  {
    company: 'MangoDev',
    description: [
      'Built new web and mobile applications using Nodejs, React, and React-native',
      'Deployed backend API built in Node.js/Express to AWS and Digital Ocean',
    ],
    stacks: [
      'Javascript',
      'React',
      'Node.js',
      'Typescript',
      'Redux',
      'React-native',
      'MongoDB',
      'PostgreSQL',
      'CSS',
      'SASS',
      'HTML',
      'AWS',
      'Digital Ocean',
    ],
    duration: 'June 2022 - March 2023',
    jobTitle: 'Fullstack developer',
  },
  {
    company: 'CcHub',
    description: [
      ' Coded pixel-perfect mobile applications from Figma using React native and Apollo GraphQL',
      'Coded frontend applications with React and Typescript',
      'Worked with the HR team to find new experienced developers through interviews and live coding assessments',
      "Inspired CcHub community members to start a career in programming through community events, by sharing my experience and some though in regards to a beginner's programming road map. ",
      " Advised a number of startups and suggested changes that could help them achieve their companies' growth, through the product advisory program of CcHub.",
      'Single-handedly managed more than 5 frontend projects per sprint including web and mobile applications.',
      'Collaborated with stakeholders from different departments to help the company maintain its partnership with other companies',
    ],
    stacks: [
      'Javascript',
      'React',
      'CSS',
      'SASS',
      'HTML',
      'Typescript',
      'Redux',
      'React-native',
      'GraphQL',
      'Apollo',
      'Chakra UI',
      'Material UI',
    ],
    duration: 'March 2022 - Present',
    jobTitle: 'Senior Frontend Developer',
  },
  {
    company: 'CodeLand',
    description: [
      'Implement interactive UI components to be used within the AEM (Adobe experience Manager)',
      'Identify and correct front-end bugs.',
      'Work closely with the back-end and design team to develop highly scalable applications.',
    ],
    stacks: [
      'Javascript',
      'HTML/HTML5',
      'CSS/CSS3',
      'SASS',
      'JQuery',
      'Adobe Experience Manager',
    ],
    duration: 'January 2022 - Present',
    jobTitle: 'Frontend Developer',
  },
  {
    company: 'OSSIX technologies',
    description: [
      'Accelerated the development of 2u & m2u finance applications for Ossix technologies',
      'Stabilized core functionalities of 2u & m2u web applications by tracking, recording and fixing bugs.',
      ' Worked closely with the design team to transform high fidelity UI components into user interactive web pages using ReactJs, Next.js and Typescript',
      'Researched and shared efficient and reliable techniques to optimize and implement responsive images across different platforms',
      'Wrote end to end test to ensure successful interaction between the front-end and the supporting backend infrastructure.',
      'Led the team as a scrum master through different sprints to ensure increased productivity and best software development practices',
    ],
    stacks: [
      'Javascript',
      'Typescript',
      'React',
      'Next.js',
      'HTML/HTML5',
      'CSS/CSS3',
      'SASS',
      'Nodejs',
      'React-native',
      'Ant/Design',
      'Theme UI',
      'Semantic UI',
    ],
    duration: 'August 2020 - January 2022',
    jobTitle: 'Software Developer',
  },

  {
    company: 'Andela',
    description: [
      'Built reliable web and mobile based application solutions for Andela partners.',
      'Maintained and collaborated on the PharmIQ web application for Andela partners.',
      'Trained, led and on-boarded more than 10 new employee prospects about Andela values and as a technical Learning facilitator assistant',
      ' Wrote unit and integration tests for different web applications with Jest,Supertest, Mocha and chai',
      'Volunteered to participate under numerous marketing strategies of Andela',
    ],
    stacks: [
      'Javascript',
      'Typescript',
      'React',
      'React-native',
      'Python',
      'Django',
      'GraphQL',
      'HTML/HTML5',
      'CSS/CSS3',
      'SASS',
      'Nodejs',
      'AWS',
    ],
    duration: 'August 2018 - April 2020',
    jobTitle: 'Software engineer',
  },
  {
    company: 'Quicktech Rwanda',
    description: [
      'Coded web applications to digitalize customer business operations using PHP and Javascript.',
      'Worked closely with the design team to implement designed mockups with HTML, CSS and Javascript',
    ],
    stacks: ['Javascript', 'PHP', 'Html', 'CSS'],
    duration: 'January 2017 - August 2018',
    jobTitle: 'Fullstack developer',
  },
];

const WorkExperience = () => {
  return (
    <div className={classes.WorkExperience}>
      <div
        className={cs(
          classes.WorkExperienceContent,
          'padding-top-100 padding-bottom-100 container-default'
        )}
      >
        <h1 className='title-block'>Work experience</h1>
        <Timeline data={EMPLOYMENTS} contentComponent={ExperienceCard} />
      </div>
    </div>
  );
};

export default WorkExperience;
