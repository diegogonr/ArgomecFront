import service1 from "../../../assets/images/argomec/servicios/Home_mantenimientoPreventivo.jpg";
import service2 from "../../../assets/images/argomec/servicios/Home_mantenimientoCorrectivo.jpg";
import service3 from "../../../assets/images/argomec/servicios/Home_mantenimientoIntegral.jpg";

import icon1 from "../../../assets/images/argomec/icons/mantenimientoCorrectivo.png";
import icon2 from "../../../assets/images/argomec/icons/mantenimientoPreventivo.png";
import icon3 from "../../../assets/images/argomec/icons/mantenimientoIntegral.png";

const ServicesSection = () => {
  return (
    <section className="section kf-services section-bg">
      <div className="container">
        <div className="kf-services-items row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div
              className="kf-services-item"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a >
                  <img src={service1} alt="Restaurant Menu" />
                </a>
              </div>
              <div className="desc">
                <div className="icon">
                  <img
                    src={icon1}
                    className="las la-utensils iconSecundary"
                    alt="Mantenimiento Preventivo"
                  />
                </div>
                <h5 className="name">Mantenimiento Preventivo</h5>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div
              className="kf-services-item"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a >
                  <img src={service2} alt="Coffee Menu" />
                </a>
              </div>
              <div className="desc">
                <div className="icon">
                  <img
                    src={icon2}
                    className="las la-utensils iconSecundary"
                    alt="Mantenimiento Correctivo"
                  />
                </div>
                <h5 className="name">Mantenimiento Correctivo</h5>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div
              className="kf-services-item"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a>
                  <img src={service3} alt="Food Services" />
                </a>
              </div>
              <div className="desc">
                <div className="icon">
                <img src={icon3} className="las la-utensils iconSecundary" alt="Mantenimiento Integral" />

                </div>
                <h5 className="name">Mantenimiento Integral</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
