import AboutSection from "./Sections/About/AboutSection";
import ChooseSection from "./Sections/ChooseSection/ChooseSection";
// import MenuSection from "./Sections/MenuSection/MenuSection";
import ServicesSection from "./Sections/ServicesSection/ServicesSection";
import StartedSlider from './Sections/StartedSlider/StartedSlider'
import CarouselSection from "./Sections/CarouselSection/CarouselSection";
import TestimonialsCarousel from "./Sections/TestimonialsCarousel/TestimonialsCarousel";
// import NumbersSection from "./Sections/NumbersSection/NumbersSection";
// import LatestBlogSection from "./Sections/LatestBlogSection/LatestBlogSection";
import CTASection from "./Sections/CTASection/CTASection";

const Wrapper = () => {
  return (
  <div className="wrapper">
    <StartedSlider></StartedSlider>
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    {/* <MenuSection></MenuSection> */}
    <ChooseSection></ChooseSection>
    <CarouselSection></CarouselSection>
    <TestimonialsCarousel></TestimonialsCarousel>
    {/* <NumbersSection></NumbersSection> */}
    {/* <LatestBlogSection></LatestBlogSection> */}
    <CTASection></CTASection>     
  </div>
  );
};

export default Wrapper;
