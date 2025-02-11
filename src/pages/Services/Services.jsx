import CategoryCorrectivo from "./CategoryCorrectivo";
import CategoryIntegral from "./CategoryIntegral";
import CategoryPreventivo from "./CategoryPreventivo";
import ServicesHeader from "./ServicesHeader";
import ServicesSection from "./ServicesSection";

const Services = () => {
  return (
  <div className="wrapper">
     <ServicesHeader></ServicesHeader>
     <ServicesSection></ServicesSection>
     <CategoryPreventivo></CategoryPreventivo>
     <CategoryCorrectivo></CategoryCorrectivo>
     <CategoryIntegral></CategoryIntegral>
  </div>
  );
};

export default Services;
