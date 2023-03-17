import About from 'components/About';
import CTASection from 'components/CTASection';
import EducationalBackground from 'components/EducationalBackground';
import Footer from 'components/Footer';
import Projects from 'components/Projects';
import Services from 'components/Services';
import WorkExperience from 'components/WorkExperience';
import { Element } from 'react-scroll';
const LandingPage = () => {
  return (
    <div>
      <Element name='About'>
        <About />
      </Element>
      <Element name='Services'>
        <Services />
      </Element>
      <Element name='Experience'>
        <WorkExperience />
      </Element>
      <Element name='Projects'>
        <Projects />
      </Element>
      <Element name='Education'>
        <EducationalBackground />
      </Element>
      <Element name='LetsTalk'>
        <CTASection />
      </Element>
      <Footer />
    </div>
  );
};

export default LandingPage;
