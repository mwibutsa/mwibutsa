import cs from "classnames";
import Timeline from "components/common/Timeline";
import ExperienceCard from "components/ExperienceCard";
import classes from "./work-experience.module.scss";

const EMPLOYMENTS = [
  {
    company: "CodeLand",
    description:
      "Coding new solutions that will increase scalability and availability of business services.",
    stacks: ["Javascript", "Html", "CSS", "SASS"],
    duration: "January 2022 - Present",
    jobTitle: "Frontend Developer",
  },

  {
    company: "Ossix technologies",
    description:
      "Worked in a team on a platform to send and receive money worldwide in an instant.",
    stacks: [
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "Html",
      "CSS",
      "SASS",
      "Nodejs",
      "React-native",
    ],
    duration: "August 2020 - January 2022",
    jobTitle: "Frontend Developer",
  },

  {
    company: "Andela",
    description:
      "Provided digital and automated solutions to Andela partners by building web applications relevant to their business operations.",
    stacks: [
      "Javascript",
      "Typescript",
      "React",
      "React-native",
      "Python",
      "Django",
      "GraphQL",
      "Html",
      "CSS",
      "SASS",
      "Nodejs",
    ],
    duration: "August 2018 - April 2020",
    jobTitle: "Associate software engineer",
  },
  {
    company: "Quicktech Rwanda",
    description:
      "Provided digital and automated solutions to Quick-tech partners by building web applications relevant to their business operations.",
    stacks: ["Javascript", "PHP", "Html", "CSS"],
    duration: "January 2017 - August 2018",
    jobTitle: "Fullstack developer",
  },
];
const WorkExperience = () => {
  return (
    <div className={classes.WorkExperience}>
      <div
        className={cs(
          classes.WorkExperienceContent,
          "padding-top-100 padding-bottom-100 container-default"
        )}
      >
        <h1 className="title-block">Work experience</h1>
        <Timeline data={EMPLOYMENTS} contentComponent={ExperienceCard} />
      </div>
    </div>
  );
};

export default WorkExperience;
