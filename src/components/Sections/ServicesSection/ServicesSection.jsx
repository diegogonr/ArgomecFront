import service1 from "../../../assets/images/service1.jpg";
import service2 from "../../../assets/images/service2.jpg";
import service3 from "../../../assets/images/service3.jpg";

const ServicesSection = () => {
  return (
    <section className="section kf-services section-bg">
      
      <div className="container">
        <div className="kf-services-items row">

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="kf-services-item element-anim-1 scroll-animate" data-animate="active">
              <div className="image kf-image-hover">
                <a href="menu-restaurant.html">
                  <img src={service1} alt="Restaurant Menu" />
                </a>
              </div>
              <div className="desc">
                <div className="icon"><i className="las la-utensils"></i></div>
                <h5 className="name">Restaurant Menu</h5>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="kf-services-item element-anim-1 scroll-animate" data-animate="active">
              <div className="image kf-image-hover">
                <a href="menu-coffee.html">
                  <img src={service2} alt="Coffee Menu" />
                </a>
              </div>
              <div className="desc">
                <div className="icon"><i className="las la-coffee"></i></div>
                <h5 className="name">Coffee Menu</h5>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="kf-services-item element-anim-1 scroll-animate" data-animate="active">
              <div className="image kf-image-hover">
                <a href="services.html">
                  <img src={service3} alt="Food Services" />
                </a>
              </div>
              <div className="desc">
                <div className="icon"><i className="las la-glass-cheers"></i></div>
                <h5 className="name">Food Services</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
