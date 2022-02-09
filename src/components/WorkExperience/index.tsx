import cs from "classnames";
import Timeline from "components/common/Timeline";
import ExperienceCard from "components/ExperienceCard";
import classes from "./work-experience.module.scss";

const EMPLOYMENTS = [
  {
    company: "CodeLand",
    description:
      "Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.",
    stacks: ["Javascript", "Html", "CSS", "SASS"],
    duration: "January 2022 - Present",
    jobTitle: "Frontend Developer",
  },

  {
    company: "Ossix technologies",
    description:
      "Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.",
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
      "Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.",
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
      "Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.",
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
