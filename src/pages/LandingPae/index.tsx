import About from "components/About";
import EducationalBackground from "components/EducationalBackground";
import Projects from "components/Projects";
import WhatIDo from "components/WhatIDo";
import WorkExperience from "components/WorkExperience";
const LandingPage = () => {
  return (
    <div>
      <About />
      <WhatIDo />
      <WorkExperience />
      <Projects />
      <EducationalBackground />
    </div>
  );
};

export default LandingPage;
