import  { useEffect } from "react";
import AOS from "aos"; // Importa la biblioteca AOS

import aboutImg from "../../../assets/images/argomec/ABOUT/about.png";
import quoteImg from "../../../assets/images/argomec/ABOUT/person.png";
import "aos/dist/aos.css"; 

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50, 
      easing: "ease-in-out", 
      disable: "mobile", 
    });
  }, []);
  
  

  return (
    <section className="section kf-about section-bg">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
            <div className="kf-titles">
              <div className="kf-subtitle" data-aos="fade-right">
                Nosotros
              </div>
              <h3 className="kf-title" data-aos="fade-right">
                ARGOMEC <br />Servicio Técnico
              </h3>
            </div>

            <div className="kf-text" data-aos="fade-up">
              <p>
                En Argomec, nos especializamos en el mantenimiento y reparación
                técnica de máquinas de café y equipos de línea blanca,
                ofreciendo soluciones confiables y personalizadas para
                garantizar que tus equipos operen al 100 %. Nuestro equipo de
                ingenieros mecatrónicos altamente capacitados trabaja con
                precisión y dedicación, priorizando la calidad y el compromiso
                en cada servicio.
              </p>
            </div>

            <div className="kf-about-quote" data-aos="fade-up">
              <img src={quoteImg} alt="" loading="lazy"/>
              <div>
                Entendemos la importancia de mantener tus equipos en óptimas
                condiciones.
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
            <div className="kf-about-image" data-aos="fade-left">
              <img src={aboutImg} alt="" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
