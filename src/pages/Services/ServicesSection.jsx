import servicePreventivo from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo1.jpg";
import serviceCorrectivo from "../../assets/images/argomec/servicios/Services_mantenimientoCorrectivo1.jpg";
import serviceIntegral from "../../assets/images/argomec/servicios/Services_mantenimientoIntegral1.jpg";

import icon1 from "../../assets/images/argomec/icons/mantenimientoCorrectivo.png";
import icon2 from "../../assets/images/argomec/icons/mantenimientoPreventivo.png";
import icon3 from "../../assets/images/argomec/icons/mantenimientoIntegral.png";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      img: servicePreventivo,
      icon: icon1,
      name: "Mantenimiento Preventivo",
    },
    {
      id: 2,
      img: serviceCorrectivo,
      icon: icon2,
      name: "Mantenimiento Correctivo",
    },
    {
      id: 3,
      img: serviceIntegral,
      icon: icon3,
      name: "Mantenimiento Integral",
    },
  ];

  return (
    <section className="section kf-services">
      <div className="container">
        <div className="kf-titles align-center">
          <h3 className="kf-title scroll-animate" data-animate="active">
            Servicios Brindados
          </h3>
        </div>
        <div className="kf-services-items row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xs-12 col-sm-12 col-md-12 col-lg-4"
            >
              <div
                className="kf-services-item scroll-animate"
                data-animate="active"
                onClick={() => navigate("/contact")}
                style={{ cursor: "pointer" }}
              >
                <div className="image kf-image-hover">
                  <img src={service.img} alt={service.name} />
                </div>
                <div className="desc">
                  <div className="icon">
                    <img
                      src={service.icon}
                      className="las la-utensils iconSecundary"
                      alt={service.name}
                    />
                  </div>
                  <h5 className="name">{service.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
