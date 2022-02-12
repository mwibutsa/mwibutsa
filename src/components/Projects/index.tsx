import cs from "classnames";
import Timeline from "components/common/Timeline";
import ProjectCard from "components/ProjectCard";
import classes from "./projects.module.scss";

const PROJECTS = [
  {
    company: "Ossix technologies",
    title: "2UMoney",
    description: `Wherever you are, you can send and receive money instantly to or from anywhere in the world.
    You can also pay your bills using any legal
     currency including bitcoin. You are your own money exchange agent. 2U Money is your one-stop
     financial services platform. On this project,
     I specifically worked on any features including but not limited to, Bank account management,
      user contact management, micro loan, credit card and services functionalities.`,
    stacks: [
      "Javascript",
      "Typescript",
      "HTML",
      "SASS",
      "CSS",
      "React",
      "React-native",
      "Next.js",
      "Semantic UI",
      "Antd",
    ],
    link: "https://2u.money",
  },
  {
    company: "SparxStudio",
    title: "Indie Sparxs",
    description: `INDIE SPARXS is an experiential and interactive multi-platform streaming app and distribution channel dedicated to independently produced film and TV. Here, creators can upload projects, connect with their audience, screen showings in private virtual rooms, and (best of all) earn money sharing their creations.
    I worked on the project during it's early stages as an Upwork freelancer So,  I worked on the landing page of the Indie Sparxs section. `,
    stacks: ["Javascript", "HTML", "SASS", "CSS", "React"],
    link: "https://sparxsstudio.com/indiesparxs",
  },
  {
    company: "CodeLand",
    title: "Martineli Genitto",
    description: `Martinelli Ginetto is a manufacturing group that today covers the high-end home textile supply chain with a worldwide leadership position. Collaborate with the most prestigious international brands. Here,
      I worked on the landing page, the contact form , the header navigation and and some UI components on other different pages.`,
    stacks: ["Javascript", "HTML", "SASS", "CSS", "JQuery", "AEM"],
    link: "https://not-yet-published",
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
