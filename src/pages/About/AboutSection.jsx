
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

import chooseIcon1 from "../../assets/images/argomec/icons/soporte-tecnico.png"; 
import chooseIcon2 from "../../assets/images/argomec/icons/apreton-de-manos.png"; 
import aboutImg2 from "../../assets/images/argomec/reparaciones/reparacion-person-vertical.jpg"; 

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
    <section className="section kf-choose kf-choose-2">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
            <div className="kf-titles">
              <div className="kf-subtitle" data-aos="fade-right">
                Nosotros ARGOMEC
              </div>
              <h3 className="kf-title" data-aos="fade-right">
                Especialistas en mantenimiento y reparación
              </h3>
            </div>

            <div className="kf-text" data-aos="fade-right">
              <p>
                En ARGOMEC, nos especializamos en el mantenimiento y reparación técnica de máquinas de café y equipos de línea blanca, ofreciendo soluciones confiables y personalizadas para garantizar que tus equipos operen al 100 %.
              </p>
              <p>
                Nuestro equipo de ingenieros mecatrónicos altamente capacitados trabaja con precisión y dedicación, priorizando la calidad y el compromiso en cada servicio.
              </p>
            </div>

            <div className="kf-choose-list">
              <ul>
                <li className="scroll-animate" data-aos="fade-right">
                  <div className="icon">
                    <img src={chooseIcon1} alt="Servicio Técnico Especializado" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Servicio Técnico Especializado</h5>
                    <div className="subname">
                      Contamos con ingenieros altamente capacitados para mantener y reparar tus equipos con la mejor calidad.
                    </div>
                  </div>
                </li>
                <li className="scroll-animate" data-aos="fade-left">
                  <div className="icon">
                    <img src={chooseIcon2} alt="Calidad y Compromiso" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Calidad y Compromiso</h5>
                    <div className="subname">
                      Trabajamos con altos estándares para maximizar el rendimiento y prolongar la vida útil de tus equipos.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <a href="servicios.html" className="kf-btn"  data-aos="fade-up">
              <span>Conoce nuestros servicios</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <div className="kf-choose-image"  data-aos="fade-up">
              <img src={aboutImg2} alt="Sobre ARGOMEC" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
