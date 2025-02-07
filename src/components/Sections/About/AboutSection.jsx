import { useEffect } from "react";
import AOS from "aos"; // Importa la biblioteca AOS

import aboutImg from "../../../assets/images/argomec/cafe/about.png";
import quoteImg from "../../../assets/images/argomec/cafe/person.png";
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
                Compromiso y Calidad 
              </div>
              <h3 className="kf-title" data-aos="fade-right">
                ARGOMEC <br />
                Servicio Técnico
              </h3>
            </div>

            <div className="kf-text" data-aos="fade-up">
              <p>
                En <strong>Argomec</strong>, contamos con años de experiencia
                brindando mantenimiento y reparación técnica para equipos de
                café y línea blanca. Nos especializamos en ofrecer soluciones
                precisas y eficientes, asegurando que cada equipo funcione en su
                máximo rendimiento.
              </p>
            </div>

            <div className="kf-about-quote" data-aos="fade-up">
              <img src={quoteImg} alt="" loading="lazy" />
              <div>
                Entendemos la importancia de mantener tus equipos en óptimas
                condiciones.
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
            <div className="kf-about-image" data-aos="fade-left">
              <img src={aboutImg} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
