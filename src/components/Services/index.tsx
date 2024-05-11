import BackenddIcon from "assets/images/backend-icon.svg";
import FrontendIcon from "assets/images/frontend-icon.svg";
import MobileAppIcon from "assets/images/mobile-app-icon.svg";
import cs from "classnames";
import classes from "./what-i-do.module.scss";
import ServiceCard from "components/ServiceCard";

const SERVICES = [
  {
    title: "Frontend development",
    description: `Dynamic Front End UI Developer with a robust 6-year track record in designing,
    analyzing, developing, and testing innovative User Interface frameworks across
    diverse web applications. Known for delivering visually appealing and high-performance
    solutions that meet client needs.`,
    skills: [
      "Javascript",
      "Typescript",
      "React",
      "HTML/HTML5",
      "CSS/CSS3",
      "SASS",
      "Quality assurance",
      "Next.js",
      "GraphQL",
      "Apollo",
      "Api integration",
    ],
    ServiceIcon: FrontendIcon,
  },
  {
    title: "Backend development",
    description: `Accomplished Software Application Developer with more than 6 years of specialized experience in
    backend development, leveraging cutting-edge technologies to build scalable APIs and services
    for mobile and web applications. Expert in creating efficient, secure, and reusable code that powers
    enterprise solutions.`,
    skills: [
      "Javascript",
      "Typescript",
      "Nodejs",
      "Express",
      "Python",
      "Django",
      "GraphQL",
      "Apollo",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Micro-services",
    ],
    ServiceIcon: BackenddIcon,
  },
  {
    title: "Mobile applications",
    description: `Passionate Mobile Application Developer with more than 4 years of hands-on experience in developing
    robust cross-platform mobile applications (iOS & Android) using React-native. Committed to crafting
    responsive applications that exceed user expectations for functionality and usability.`,
    skills: ["React-native", "Javascript", "Typescript", "Api integration"],
    ServiceIcon: MobileAppIcon,
  },
];
const WhatIDo = () => {
  return (
    <div
      className={cs(
        "container-default padding-top-100 padding-bottom-100",
        classes.WhatIDo
      )}
    >
      <h1 className="title-block">Services</h1>
      <div className={classes.content}>
        <div className={cs(classes.cards, "margin-top-64 margin-bottom-64")}>
          {SERVICES.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </div>
        <div className={classes.textContent}>
          <h1 className="title-block">Why should you hire me?</h1>
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
