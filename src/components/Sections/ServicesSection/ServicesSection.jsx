import { useNavigate } from "react-router-dom";
import service1 from "../../../assets/images/argomec/servicios/Home_mantenimientoPreventivo.jpg";
import service2 from "../../../assets/images/argomec/servicios/Home_mantenimientoCorrectivo.jpg";
import service3 from "../../../assets/images/argomec/servicios/Home_mantenimientoIntegral.jpg";

import icon1 from "../../../assets/images/argomec/icons/mantenimientoCorrectivo.png";
import icon2 from "../../../assets/images/argomec/icons/mantenimientoPreventivo.png";
import icon3 from "../../../assets/images/argomec/icons/mantenimientoIntegral.png";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      img: service1,
      icon: icon1,
      name: "Mantenimiento Preventivo",
    },
    {
      id: 2,
      img: service2,
      icon: icon2,
      name: "Mantenimiento Correctivo",
    },
    {
      id: 3,
      img: service3,
      icon: icon3,
      name: "Mantenimiento Integral",
    },
  ];

  return (
    <section className="section kf-services section-bg">
      <div className="container">
        <div className="kf-services-items row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xs-12 col-sm-12 col-md-12 col-lg-4"
            >
              <div
                className="kf-services-item"
                data-animate="active"
                onClick={() => navigate("/contact")}
                style={{ cursor: "pointer" }}
              >
                <div className="image kf-image-hover">
                  <a>
                    <img src={service.img} alt={service.name} />
                  </a>
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
