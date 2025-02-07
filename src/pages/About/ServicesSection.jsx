import serviceIcon1 from "../../assets/images/images/service_icon1.png"; // Asegúrate de que la ruta es correcta
import serviceIcon2 from "../../assets/images/images/service_icon2.png"; // Asegúrate de que la ruta es correcta
import serviceIcon3 from "../../assets/images/images/service_icon3.png"; // Asegúrate de que la ruta es correcta
import serviceIcon4 from "../../assets/images/images/service_icon4.png"; // Asegúrate de que la ruta es correcta

const ServicesSection = () => {
  return (
    <section className="section kf-services">
      <div className="container">
        <div className="kf-services-items-2 row">
          {/* Service Item 1 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div
              className="kf-services-item-2 "
              data-animate="active"
            >
              <div className="image">
                <img src={serviceIcon1} alt="Birthday Cakes" />
              </div>
              <div className="desc">
                <h5 className="name">Birthday Cakes</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div
              className="kf-services-item-2 "
              data-animate="active"
            >
              <div className="image">
                <img src={serviceIcon2} alt="Fresh Foods" />
              </div>
              <div className="desc">
                <h5 className="name">Fresh Foods</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div
              className="kf-services-item-2 "
              data-animate="active"
            >
              <div className="image">
                <img src={serviceIcon3} alt="Skills Chefs" />
              </div>
              <div className="desc">
                <h5 className="name">Skills Chefs</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
              </div>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div
              className="kf-services-item-2 "
              data-animate="active"
            >
              <div className="image">
                <img src={serviceIcon4} alt="Organic Juice" />
              </div>
              <div className="desc">
                <h5 className="name">Organic Juice</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
