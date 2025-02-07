import AboutSection from "../../components/Sections/About/AboutSection";
import ChooseSection from "../../components/Sections/ChooseSection/ChooseSection";
// import MenuSection from "../../components/Sections/MenuSection/MenuSection";
import ServicesSection from "../../components/Sections/ServicesSection/ServicesSection";
import StartedSlider from '../../components/Sections/StartedSlider/StartedSlider'
// import CarouselSection from "../../components/Sections/CarouselSection/CarouselSection";
import TestimonialsCarousel from "../../components/Sections/TestimonialsCarousel/TestimonialsCarousel";
// import NumbersSection from "../../components/Sections/NumbersSection/NumbersSection";
// import LatestBlogSection from "../../components/Sections/LatesretBlogSection/LatestBlogSection";
import CTASection from "../../components/Sections/CTASection/CTASection";

const Home = () => {
  return (
  <div className="wrapper">
    <StartedSlider></StartedSlider>
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    {/* <MenuSection></MenuSection> */}
    <ChooseSection></ChooseSection>
    {/* <CarouselSection></CarouselSection> */}
    <TestimonialsCarousel></TestimonialsCarousel>
    {/* <NumbersSection></NumbersSection> */}
    {/* <LatestBlogSection></LatestBlogSection> */}
    <CTASection></CTASection>     
  </div>
  );
};

export default Home;
