import serviceIcon1 from "../../assets/images/argomec/icons/apreton-de-manos.png";
import serviceIcon2 from "../../assets/images/argomec/icons/bombilla-creativa.png";
import serviceIcon3 from "../../assets/images/argomec/icons/configuraciones.png";
import serviceIcon4 from "../../assets/images/argomec/icons/auto-confianza.png";

const ServicesSection = () => {


  
  return (
    <section className="section kf-services">
      <div className="container">
        <div className="kf-services-items-2 row">
          {/* Servicio 1 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-services-item-2" data-animate="active">
              <div className="image">
                <img src={serviceIcon1} alt="Compromiso y Calidad" />
              </div>
              <div className="desc">
                <h5 className="name">Compromiso y Calidad</h5>
                <div className="subname">Nos esforzamos por brindar un servicio excepcional con los más altos estándares.</div>
              </div>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-services-item-2" data-animate="active">
              <div className="image">
                <img src={serviceIcon2} alt="Innovación y Tecnología" />
              </div>
              <div className="desc">
                <h5 className="name">Innovación y Tecnología</h5>
                <div className="subname">Utilizamos equipos y métodos de vanguardia para ofrecer soluciones eficientes.</div>
              </div>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-services-item-2" data-animate="active">
              <div className="image">
                <img src={serviceIcon3} alt="Atención Personalizada" />
              </div>
              <div className="desc">
                <h5 className="name">Atención Personalizada</h5>
                <div className="subname">Nos adaptamos a las necesidades de cada cliente para brindar un servicio a medida.</div>
              </div>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-services-item-2" data-animate="active">
              <div className="image">
                <img src={serviceIcon4} alt="Responsabilidad y Confianza" />
              </div>
              <div className="desc">
                <h5 className="name">Responsabilidad y Confianza</h5>
                <div className="subname">Construimos relaciones basadas en la honestidad y el profesionalismo.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;