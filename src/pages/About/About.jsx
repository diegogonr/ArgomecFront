
import CTASection from "../../components/Sections/CTASection/CTASection";
import AboutUsHeader from "./AboutUsHeader"
import AboutSection from "./AboutSection"
import ServicesSection from "./ServicesSection"
import './StyleAbout.css'
const About = () => {
  return (
  <div className="wrapper">
    <AboutUsHeader/>
    <AboutSection/>
    <ServicesSection/>
    <CTASection></CTASection>     
  </div>
  );
};

export default About;
