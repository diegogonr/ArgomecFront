
import servicePreventivo from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo1.jpg"
import serviceCorrectivo from "../../assets/images/argomec/servicios/Services_mantenimientoCorrectivo1.jpg"
import serviceIntegral from "../../assets/images/argomec/servicios/Services_mantenimientoIntegral1.jpg"

const ServicesSection = () => {
    const services = [
      { id: 1, img: servicePreventivo, icon: "las la-utensils", name: "Mantenimiento Preventivo" },
      { id: 2, img: serviceCorrectivo, icon: "las la-coffee", name: "Mantenimiento Correctivo" },
      { id: 3, img: serviceIntegral, icon: "las la-glass-cheers", name: "Mantenimiento Integral" }
    ];
  
    return (
      <section className="section kf-services">
        <div className="container">
          <div className="kf-titles align-center">
            {/* <div className="kf-subtitle  scroll-animate" data-animate="active">
              Servicios Brindados
            </div> */}
            <h3 className="kf-title  scroll-animate" data-animate="active">
              Servicios Brindados
            </h3>
          </div>
          <div className="kf-services-items row">
            {services.map(service => (
              <div key={service.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-services-item  scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <img src={service.img} alt={service.name} />
                  </div>
                  <div className="desc">
                    <div className="icon"><i className={service.icon}></i></div>
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
  