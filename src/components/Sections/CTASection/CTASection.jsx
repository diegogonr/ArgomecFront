
import portada4 from '../../../assets/images/argomec/PORTADA/portada4.jpg'
const CTASection = () => {
  return (
    <section
      className="section kf-cta kf-parallax"
      style={{ backgroundImage: `url(${portada4})`  }} // Cambia esta ruta por una relevante
    >
      <div className="container">
        <div className="row">
          {/* Left Section: Titles */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="kf-titles">
              <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                ¿Tu máquina de café necesita atención?
              </div>
              <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                Agenda una revisión técnica hoy mismo
              </h3>
            </div>
          </div>

          {/* Right Section: Button */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
            <a
              href="contacto.html" // Cambia el enlace según tu estructura
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>Solicitar Servicio</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
