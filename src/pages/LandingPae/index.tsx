import About from "components/About";
import CTASection from "components/CTASection";
import EducationalBackground from "components/EducationalBackground";
import Footer from "components/Footer";
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
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
